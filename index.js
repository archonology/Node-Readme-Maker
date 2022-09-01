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
# Table of Contents:<br>
#### [Description](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#description)<br>
#### [Installation](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#installation)<br>
#### [Usage Info](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#usage-info)<br>
#### [Constribution Guidelines](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#constribution-guidelines)<br>
#### [Test Instructions](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#test-instructions)<br>
#### [Questions](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#questions)<br>
#### [License Info](https://github.com/archonology/Pro-Readme-Generator/blob/main/README.md#license-info)<br>

## <h2 id="descript">Description</h2>
${description}
    
## <h2 id="install">Installation</h2>
${installation}

## <h2 id="usage">Usage Info</h2>
${usageInfo}

## <h2 id="contrib">Constribution Guidelines</h2>
${contributions}

## <h2 id="test">Test Instructions</h2>
${testInstruct}

## <h2 id="quests">Questions</h2>
add github idea, email, and GitHub link to this section. Instructions on how to reach user with additional questions.
    
### <h2 id="license">License Info</h2>
This project is covered under ${option}. ${option} description added here. Research license badges on github...`;

    fs.writeFile("README.md", readMe, (err) =>
      err ? console.log(err) : console.log("success!")
    );
  });

//readme formatting docs from github:
  //https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
