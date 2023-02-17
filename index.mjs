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
        name: 'description',
        type: 'input',
        message: "Please type out the description you would like displayed on the README file.",
    },
    {
        name: 'installation',
        type: 'input',
        message: "Please type out your installation instructions.",
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
        choices: ['MIT', 'Apache 2.0', 'Boost', 'none'],
    },
    {
        name: 'contributing',
        type: 'input',
        message: "Please write out the names of any other contributers you would like to include, separated by commas.",
    },
    {
        name: 'tests',
        type: 'input',
        message: "Please write out any tests you ran that you want to be displayed.",
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



function licenseBadge(license){

    if (license == "Apache 2.0"){
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if (license == "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    
    } else if (license == "Boost") {

        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } else {
        return ""
    }

};

let readMeText = `
# ${data.project_name}

## Description
${data.description}

## Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributers](#Contributers)
* [Tests](#Tests)
* [Questions](#Questions)


## Installation
${data.installation}

## Usage
${data.usage}

## License
 ${licenseBadge(data.license)}

## Contrubuting
 ${data.contributing}

## Tests
 ${data.tests}

## Questions 
Have any questions? Feel free to email me at ${data.email} or reach out on on [GitHub](${data.github_link})!
`

await fs.writeFile("README.md", readMeText);