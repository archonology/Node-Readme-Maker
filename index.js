const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  //collecting data from user
  .prompt([
    {
      type: "input",
      message:
        "Hello! I see you would like to make a new README. What is the title of your README?",
      name: "title",
    },
    {
      type: "input",
      message: "Now what is the exact title of the REPO for your project?",
      name: "projectLink",
    },
    {
      type: "input",
      message:
        "Nice. Please paste the link for the video tutorial, if you have one.",
      name: "videoLink",
    },
    {
      type: "input",
      message: "This project sounds boss! Please describe it for me.",
      name: "description",
    },
    {
      type: "input",
      message:
        "Wow, sounds interesting! Can you tell me about any installation instructions for your project?",
      name: "installation",
    },
    {
      type: "input",
      message: "I see. Is there any usage information we should have?",
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
      //creating a list of options to select the license
      type: "list",
      name: "license",
      message:
        "Almost finished! What license is your project covered under? Select an option below.",
      choices: [
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' License",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "GNU Lesser General Public License v2.1",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },
    {
      type: "input",
      message: "Cool. Now, what is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "Lastly, what is your GitHub user name?",
      name: "gitHubName",
    },
  ])
  //checking answers and passing the user's answers into a const
  .then((answers) => {
    console.log(answers);
    const {
      title,
      projectLink,
      videoLink,
      description,
      installation,
      usageInfo,
      contributions,
      testInstruct,
      license,
      email,
      gitHubName,
    } = answers;
    //clear out the licenseLink each time and have a var for the link to go once selected
    var licenseLink = "";
    //if statements that associate the licence choice with it's matching html page
    if (answers.license == "GNU General Public License v3.0") {
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
    }
    if (answers.license == "MIT License") {
      licenseLink = "https://opensource.org/licenses/MIT";
    }
    if (answers.license == "BSD 2-Clause 'Simplified' License") {
      licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
    }
    if (answers.license == "BSD 3-Clause 'New' or 'Revised' License") {
      licenseLink =
        "https://en.wikipedia.org/wiki/BSD_licenses#3-clause_license_(%22BSD_License_2.0%22,_%22Revised_BSD_License%22,_%22New_BSD_License%22,_or_%22Modified_BSD_License%22)";
    }
    if (answers.license == "Boost Software License 1.0") {
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt";
    }
    if (answers.license == "Creative Commons Zero v1.0 Universal") {
      licenseLink = "https://creativecommons.org/publicdomain/zero/1.0/";
    }
    if (answers.license == "Eclipse Public License 2.0") {
      licenseLink = "https://www.eclipse.org/legal/epl-2.0/";
    }
    if (answers.license == "GNU Affero General Public License v3.0") {
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html";
    }
    if (answers.license == "GNU General Public License v2.0") {
      licenseLink = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html";
    }
    if (answers.license == "GNU Lesser General Public License v2.1") {
      licenseLink =
        "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
    }
    if (answers.license == "Mozilla Public License 2.0") {
      licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/";
    }
    if (answers.license == "The Unlicense") {
      licenseLink = "https://unlicense.org/";
    }
    //Template Literal that get's printed with user's answers
    const readMe = `# ${title}
    ${license}
## Links
[Click here to visit this project's repository](https://github.com/archonology/${projectLink})<br>
[Click here to watch a video tutorial on Youtube](${videoLink})    
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
If you have questions about this project or any of my other work, please contact me at ${email}. Check out more of my work on Github at [${gitHubName}](https://github.com/${gitHubName}).
    
## License Info
This project is covered under **${license}**. Follow the link to learn more about <a href="${licenseLink}" target="_blank">*${license}*</a>.`;
    //writes the readme file and notifies user whether it was successful or not
    fs.writeFile("README.md", readMe, (err) =>
      err
        ? console.log(err)
        : console.log(
            "Success! Your README has been generated. Have a great day!"
          )
    );
  });

//link to my video tutorial
//https://youtu.be/qcAhijXro-Q
