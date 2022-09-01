const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message:
        "Hello! I see you would like to make a new README. What is the title of your new project?",
      name: "title",
    },
    {
      type: "input",
      message: "Great title! Next, please descibe your project.",
      name: "description",
    },
    {
      type: "input",
      message:
        "Wow, sounds interesting! Now tell me about any installation instructions for your project.",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Your doing great! Now tell me about any usage information we should have.",
      name: "usageInfo",
    },
    {
      type: "input",
      message: "Are there any contribution guidelines?",
      name: "contributions",
    },
    {
      type: "input",
      message: "Are there any test instructions?",
      name: "testInstruct",
    },
    {
        //need to figure out how to do this options thing
      type: "list",
      name: "license",
      message: "Almost finished! What license is your project covered under?",
      choices: ["GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
      },
    {
        type: "input",
        message: "Lastly, what is your GitHub user name?",
        name: "gitHubName",
      },
  ])
  .then((answers) => {
    console.log(answers);
    const {
      title,
      description,
      installation,
      usageInfo,
      contributions,
      testInstruct,
      license,
      email,
      gitHubName
    } = answers;
    var licenseLink = "";

if (answers.license == "GNU General Public License v3.0"){
    licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
}
if (answers.license == "MIT License"){
   licenseLink = "https://opensource.org/licenses/MIT"
}
if (answers.license == "BSD 2-Clause 'Simplified' License"){
    licenseLink = "https://opensource.org/licenses/BSD-2-Clause"
 }
 if (answers.license == "BSD 3-Clause 'New' or 'Revised' License"){
    licenseLink = "https://en.wikipedia.org/wiki/BSD_licenses#3-clause_license_(%22BSD_License_2.0%22,_%22Revised_BSD_License%22,_%22New_BSD_License%22,_or_%22Modified_BSD_License%22)"
 }
 if (answers.license == "Boost Software License 1.0"){
    licenseLink = "https://www.boost.org/LICENSE_1_0.txt"
 }
 if (answers.license == "Creative Commons Zero v1.0 Universal"){
    licenseLink = "https://creativecommons.org/publicdomain/zero/1.0/"
 }
 if (answers.license == "Eclipse Public License 2.0"){
    licenseLink = "https://www.eclipse.org/legal/epl-2.0/"
 }
 if (answers.license == "GNU Affero General Public License v3.0"){
    licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html"
 }
 if (answers.license == "GNU General Public License v2.0"){
    licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html"
 }
 if (answers.license == "GNU Lesser General Public License v2.1"){
    licenseLink = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html"
 }
 if (answers.license == "Mozilla Public License 2.0"){
    licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/"
 }
 if (answers.license == "The Unlicense"){
    licenseLink = "https://unlicense.org/"
 }

    const readMe = `# ${title}
    ${license}
## Table of Contents:
#### [Description](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#description)
#### [Installation](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#installation)
#### [Usage Info](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#usage-info)
#### [Constribution Guidelines](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#constribution-guidelines)
#### [Test Instructions](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#test-instructions)
#### [Questions](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#questions)
#### [License Info](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#license-info)

## Description
${description}
    
## Installation
${installation}

## Usage Info
${usageInfo}

## Contribution Guidelines
${contributions}

## Test Instructions
${testInstruct}

## Questions
If you have questions about this project or any of my other work, please contact me at ${email}. Check out more of my work at [${gitHubName}](https://github.com/${gitHubName}).
    
### License Info
This project is covered under ${license}. Learn more about [${license}](${licenseLink})`;

    fs.writeFile("README.md", readMe, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });

//readme formatting docs from github:
  //https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax


  // license list: Apache License 2.0
// GNU General Public License v3.0
// MIT License
// BSD 2-Clause "Simplified" License
// BSD 3-Clause "New" or "Revised" License
// Boost Software License 1.0
// Creative Commons Zero v1.0 Universal
// Eclipse Public License 2.0
// GNU Affero General Public License v3.0
// GNU General Public License v2.0
// GNU Lesser General Public License v2.1
// Mozilla Public License 2.0
// The Unlicense