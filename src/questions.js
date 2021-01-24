// Get packages
import chalk from "chalk";
import boxen from "boxen";
import inquirer from "inquirer";
import path from "path";
import { platform } from "os";
import { checkPath } from "./utils";

// Define function
async function askQuestions ()
{
    // Just a helpful message
    const greeting = chalk.blue.bold("XStarter");

    // Display settings for boxen
    const boxenOptions = {
        padding: 3,
        margin: 1,
        borderStyle: "round",
        borderColor: "green",
        backgroundColor: "#123456"
    };

    // Finally display welcome message
    const msgBox = boxen(greeting, boxenOptions);
    console.log(msgBox);

    // Initial set of questions
    const questionsSetA =
        [
            {
                name: 'project-name',
                type: 'input',
                message: 'Project name: ',
                validate: function ( input )
                {
                    let valid = true;

                    // Regex to ensure that project name starts with a letter, includes letters, numbers, underscores and hashes
                    if (/^[a-z](?:_?[a-z0-9\-\_\d]+)*$/i.test( input )) {
                        valid = valid && true;
                    } else {

                        // Tell user the rules
                        return 'Project must \n 1) start with a letter \n 2) name may only include letters, numbers, underscores and hashes.';
                    }

                    // Get current path
                    const path = `${ process.cwd() }/${ input }`;

                    // Check that no folder exists at this location
                    if (checkPath(path)) {
                        return 'Project with this name already exists at this location';
                    } else {
                        return valid && true;
                    }
                }
            },
            {
                type: "list",
                name: "template",
                message: "Please choose a project template to use",
                choices:
                    [
                        "Node-Express-Mongo-JS",
                        "HTML,CSS,JS",
                        "Custom"
                    ]
            }
        ];

    // Allow user to input template path
    const useCustom =
        [
            {
                name: 'template-path',
                type: 'input',
                message: 'Enter full path to custom template folder ',
                validate: function ( input )
                {
                    let tPath = input;

                    if (platform() === "win32") {
                        tPath = path.win32.normalize(input);
                    }

                    if (checkPath(tPath)) {
                        return true;
                    } else {
                        return "Template path does not exist.";
                    }
                }
            },
        ];

    // Init git and set up a package manager if needed
    const questionsSetB =
        [
            {
                type: "confirm",
                name: "git",
                message: "Initialize a git repository (false)?",
                default: false
            },
            {
                type: "confirm",
                name: "pkg",
                message: "Use a package manager? (false) ",
                default: false
            }
        ];

    const questionsSetC =
        [
            {
                type: "list",
                name: "package-manager",
                message: "Please choose a package manager (npm)",
                choices: [ "npm", "yarn" ],
                default: "npm"
            },
            {
                type: "confirm",
                name: "install",
                message: "Install dependencies? (false) ",
                default: false
            },
        ];

    try {
        
        // Actually ask the questions
        let answersA, answersB, answersC, answersD;

        answersA = await inquirer.prompt(questionsSetA);

        if (answersA.template === "Custom") {
            answersB = await inquirer.prompt(useCustom);
        }

        answersC = await inquirer.prompt(questionsSetB);

        if (answersC.pkg) {
            answersD = await inquirer.prompt(questionsSetC);
        }

        // Collate answers
        const answers =
        {
            ...answersA,
            ...answersB,
            ...answersC,
            ...answersD
        };

        return answers;

    } catch (err) {
        if (err) {
            switch (err.status) {
                case 401:
                    console.error('401');
                    break;
                default:
                    console.error(err);
            }
        }
    }
}

export default askQuestions;
