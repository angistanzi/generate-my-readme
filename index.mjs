import inquirer from "inquirer";
import fs from "fs/promises";

const data = await inquirer 
.prompt([
    {
        name: 'project_name',
        message: "What is the name of your project?",
        type: 'input',
    },
    {
        name: 'github_name',
        type: 'input',
        message: "What's your Github username?",
    },
    {
        name: 'email',
        type: 'input',
        message: "What's your email address?",
    },
]);