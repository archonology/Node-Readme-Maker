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
        "GNU Lesser General Public License v3.0",
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
    //clear out the licenseLink and licenseSummary each time and have a var for the link to go once selected
    var licenseLink = "";
    var licenseSummary = "";
    //if statements that associate the licence choice with it's matching html page
    if (answers.license == "GNU General Public License v3.0") {
      licenseLink =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";

      licenseSummary =
        "Developers who write software can release it under the terms of the GNU GPL. When they do, it will be free software and stay free software, no matter who changes or distributes the program. We call this copyleft: the software is copyrighted, but instead of using those rights to restrict users like proprietary software does, we use them to ensure that every user has freedom.";
    }
    if (answers.license == "MIT License") {
      licenseLink =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      
      licenseSummary =
        "A short, permissive software license. Basically, you can do whatever you want as long as you include the original copyright and license notice in any copy of the software/source.  There are many variations of this license in use.";
    }
    if (answers.license == "BSD 2-Clause 'Simplified' License") {
      licenseLink =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      licenseSummary =
        "This license has also been called the 'Simplified BSD License' and the 'FreeBSD License'";
    }
    if (answers.license == "BSD 3-Clause 'New' or 'Revised' License") {
      licenseLink =
        "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      licenseSummary =
        "The BSD 3-clause license allows you almost unlimited freedom with the software so long as you include the BSD copyright and license notice in it (found in Fulltext). ";
    }
    if (answers.license == "Boost Software License 1.0") {
      licenseLink =
        "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      licenseSummary =
        "Permission is hereby granted, free of charge, to any person or organization obtaining a copy of the software and accompanying documentation covered by this license (the 'Software') to use, reproduce, display, distribute, execute, and transmit the Software, and to prepare derivative works of the Software, and to permit third-parties to whom the Software is furnished to do so, all subject to the following: <br> The copyright notices in the Software and this entire statement, including the above license grant, this restriction and the following disclaimer, must be included in all copies of the Software, in whole or in part, and all derivative works of the Software, unless such copies or derivative works are solely in the form of machine-executable object code generated by a source language processor.";
    }
    if (answers.license == "Creative Commons Zero v1.0 Universal") {
      licenseLink =
        "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
      licenseSummary =
        "The person who associated a work with this deed has dedicated the work to the public domain by waiving all of his or her rights to the work worldwide under copyright law, including all related and neighboring rights, to the extent allowed by law.";
    }
    if (answers.license == "Eclipse Public License 2.0") {
      licenseLink =
        "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      licenseSummary =
        "Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution of such Contributor, if any, and such derivative works, in source code and object code form.";
    }
    if (answers.license == "GNU Affero General Public License v3.0") {
      licenseLink =
        "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      licenseSummary =
        "The GNU Affero General Public License is a modified version of the ordinary GNU GPL version 3. It has one added requirement: if you run a modified program on a server and let other users communicate with it there, your server must also allow them to download the source code corresponding to the modified version running there.";
    }
    if (answers.license == "GNU General Public License v2.0") {
      licenseLink =
        "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      licenseSummary =
        "The licenses for most software are designed to take away your freedom to share and change it. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change free software--to make sure the software is free for all its users. This General Public License applies to most of the Free Software Foundation's software and to any other program whose authors commit to using it. (Some other Free Software Foundation software is covered by the GNU Lesser General Public License instead.) You can apply it to your programs, too.";
    }
    if (answers.license == "GNU Lesser General Public License v3.0") {
      licenseLink =
        "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";

      licenseSummary =
        "The GNU Project has two principal licenses to use for libraries. One is the GNU Lesser GPL; the other is the ordinary GNU GPL. The choice of license makes a big difference: using the Lesser GPL permits use of the library in proprietary programs; using the ordinary GPL for a library makes it available only for free programs.";
    }
    if (answers.license == "Mozilla Public License 2.0") {
      licenseLink =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";

      licenseSummary =
        "MPL is a copyleft license that is easy to comply with. You must make the source code for any of your changes available under MPL, but you can combine the MPL software with proprietary code, as long as you keep the MPL code in separate files. Version 2.0 is, by default, compatible with LGPL and GPL version 2 or greater. You can distribute binaries under a proprietary license, as long as you make the source available under MPL.";
    }
    if (answers.license == "The Unlicense") {
      licenseLink =
        "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      licenseSummary =
        "This is free and unencumbered software released into the public domain. <br> Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.";
    }
    //Template Literal that get's printed with user's answers
    const readMe = `# ${title}
    ${licenseLink}
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
This project is covered under **${license}**. 
<br>
*${licenseSummary}* 
<br>
To learn more, click the badge: ${licenseLink}"`;

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
