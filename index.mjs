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
        name: 'github_link',
        type: 'input',
        message: "What's your Github link?",
    },
    {
        name: 'email',
        type: 'input',
        message: "What's your email address?",
    },
    {
        name: 'description',
        type: 'input',
        message: "Please type out the description you would like displayed on the README file.",
    },
    {
        name: 'installation',
        type: 'input',
        message: "Please type out your installation ",
    },
    {
        name: 'contributing',
        type: 'input',
        message: "Please write out the names of any other contributers you would like to include, separated by commas.",
    },
    {
        name: 'usage',
        type: 'input',
        message: "Please add what you would like displayed in the Usage section.",
    },
    {
        name: 'license',
        type: 'list',
        message: "What license would you like?",
        choices: ['MIT', 'Apache 2.0', 'GPL', 'none'],
    },
    {
        name: 'license',
        type: 'input',
        message: "What license would you like?",
        choices: ['MIT', 'Apache 2.0', 'GPL', 'none'],
    },
]);



function licenseBadge(license){

    if (license != null){
        return '[License](https://img.shields.io/badge/license-${license}-blue.svg)'
    }else{
        return ""
    }

};

let readMeText = `
# ${data.project_name}

## Description
${data.description}

## Contents
${data.table_of_contents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
 ${licenseBadge()}

## Contrubuting
 ${data.contributing}

## Tests
 ${data.tests}

## Questions 
Have any questions? Feel free to email me at ${data.email} or reach out on on [GitHub](${data.github_link})!
`

await fs.writeFile("README.md", readMeText);