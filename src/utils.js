// Import necessary modules
import fs from "fs";
import execa from 'execa';

// Map templates choices to folders
const mapToTemplates = {
	"Node-Express-Mongo-JS": "ejs",
    "HTML,CSS,JS": "basic",
    "basic-jwt": "basic-jwt",
    "basic-session": "basic-session",
    "ejs-jwt": "ejs-jwt",
    "ejs-session": "ejs-session"
};

// Init git
async function initGit (options) {
    
    const result = await execa('git', [ 'init' ], {
        cwd: options.targetDirectory,
    });

    if (result.failed) {
        return Promise.reject( new Error( 'Failed to initialize git' ) );
    }

    return;
}

async function editPackageJSON (options)
{
    const targetDir = options.targetDirectory;
    let jsonFile;

    fs.readFile(`${ targetDir }/package.json`, function (err, data) {
        
        //If no package.json, this will be skipped
        if (!err) {
            jsonFile = JSON.parse(data);
            jsonFile.name = options.name;

            fs.writeFileSync(`${ targetDir }/package.json`, JSON.stringify(jsonFile, null, "\t"), (err, data) => {
                if (err) {
                    throw new Error("Unable to update package.json");
                }
            });
        }
    });
}

// Check if folder exists in current directory
const checkPath = (path) =>
{
    try {
    	return fs.existsSync(path);
    } catch (err) {
    	console.error(err);
    }
};

// Make function global
export { 
	checkPath,
	mapToTemplates,
    initGit,
    editPackageJSON
};
