const questions = [
    {
        type: "input",
        message: "Welcome to Node README Maker! What is the title of your readme?",
        name: "title"
    },
    {
        type: "input",
        message: "In about 50 words or less, provide a brief summary of the application.",
        name: "summary"
    },
    {
        type: "input",
        message: "Thanks. Now provide all the details about the application.",
        name: "about"
    },
    {
        type: "list",
        message: "Select a License:",
        choices: [
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
        name: "license",
    }
];

module.exports = questions;