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
]);

let readMeText = `
# ${project_name}

## Description
${description}

## Contents
${table_of_contents}

## Installation
${installation}

## Usage
${usage}

## License
 ${license}

## Contrubuting
 ${contributing}

## Tests
 ${tests}

## Questions 
Have any questions? Feel free to email me at ${email} or reach out on on [GitHub](${github_link})!
`