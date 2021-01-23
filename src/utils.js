// Import necessary modules
import fs from "fs";

// Define function
const checkPath = (path) =>
{
    try {
    	return fs.existsSync( path );
    } catch ( err ) {
    	console.error( err );
    }
};

// Make function global
export { checkPath };
