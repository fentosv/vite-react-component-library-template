require('dotenv').config();
const { execSync } = require('child_process')

const { commitNameChecker } = require('./commit-name')

const GITHUB_COMMIT_NAME = process.env.GITHUB_COMMIT_NAME

const console_run = async () => {
    const commitName = commitNameChecker(GITHUB_COMMIT_NAME);

    try {
        execSync(`git add .`)
        execSync(`git commit -m "${commitName}"`)
        execSync(`git push`)



    } catch (error) {
        console.log(error.message);

    }
}

console_run()
