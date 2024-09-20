// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
// TODO: Create an array of questions for user input
const questions = [];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Please provide a description of your project',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the installation instructions?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'Please provide usage information',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'Please provide contribution guidelines',
                name: 'contribution',
            },
            {
                type: 'input',
                message: 'Please provide test instructions',
                name: 'test',
            },
            {
                type: 'list',
                message: 'Please select a license',
                name: 'license',
                choices: ['MIT', 'GNU', 'Apache', 'ISC'],
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'github',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
        ])
        .then((response) => {
            const markdown = `
# ${response.title}
## Description
${response.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test](#test)
- [License](#license)
- [Questions](#questions)
## Installation
${response.installation}
## Usage
${response.usage}
## Contribution
${response.contribution}
## Test
${response.test}
## License
${response.license}
## Questions
- GitHub: [${response.github}](
- Email: ${response.email}
`;
            writeToFile('README.md', markdown);
        }
        );
}
// Function call to initialize app
init();
