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
      type: "options",
      message: "Almost finished! What license is your project covered under?",
      name: "license A",
      name: "license B",
      name: "license C",
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
      option,
    } = answers;

    const readMe = `# ${title}
    ${option}
#Table of Contents:
    <a href="##Description">Description<a>
    <a href="##Installation">Installation<a>
    <a href="##Usage Info">Usage Info<a>
    <a href="##Contribution Guidelines">Constribution Guidelines<a>
    <a href="##Test Instructions">Test Instructions<a>
    <a href="###Questions">Questions<a>
    <a href="###License Info">License Info<a>
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
add github idea, email, and GitHub link to this section. Instructions on how to reach user with additional questions.
    
### License Info
This project is covered under ${option}. ${option} description added here. Research license badges on github...`;

    fs.writeFile("README.md", readMe, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });
