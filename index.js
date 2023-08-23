const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./scripts/questions");
const licenses = require("./scripts/licenses");
let licenseTitle = "";
let licenseLink = "";
let licenseSummary = "";

inquirer
  //collecting data from user
  .prompt(questions)
  //checking response and passing the user's response into a const
  .then((response) => {
    console.log(response);
    const {
      title,
      summary,
      about,
      li,
    } = response;

    for (let license of licenses) {
      if (license.title === response.li) {
        licenseTitle = license.title;
        licenseLink = license.link;
        licenseSummary = license.sum;
      }
    }

    const readMe = `# ${title}

${licenseLink}

${summary}

**By [Reed Meher](https://www.meherdevs.com)**

## Table of Contents:

1. [About](#about)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [Support](#support)
5. [Gratitude](#gratitude)
6. [License Info](#license-info)

## About

${about}

![App screenshot]()
 
## Usage

Once you've cloned this repo or created your fork and pulled it down to your local machine:
1. 

**Important:** 

## Contributing

If you would like to contribute to this application, you may:
1. Create a fork of the repository.
2. Check the Issues tab in my repository to see if there is anything flagged to be completed or fixed.
3. Work your coding magic.
4. Push up your work when it works, and make a pull request. Please include a detailed note of what you added or changed and why.

If it all looks good, you can expect gratitude and a happy merging.

## Support

Please reach out if you hit any snags, have questions, or come up with some helpful feedback.  

<reed@meherdevs.com> 

[Check out more of my open-source on Github](https://github.com/Archonology)

[See my portfolio](https://www.meherdevs.com)

## Gratitude


    
## License Info

${licenseLink}

This project is covered under **${licenseTitle}**.

*${licenseSummary}* 

`;

    //writes the readme file and notifies user whether it was successful or not
    fs.writeFile("./dist/README.md", readMe, (err) =>
      err
        ? console.log(err)
        : console.log(
          `Success! Your README.md has been generated. Please retrieve it from the dist folder and thank you for using Node README Maker by Reed Meher, 2023 @ https://www.meherdevs.com`
        )
    );
  });
