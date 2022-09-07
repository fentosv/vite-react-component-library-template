require('dotenv').config();
const { execSync } = require('child_process')

const { commitNameChecker } = require('./commit-name')

const GITHUB_EMAIL = process.env.GITHUB_EMAIL
const GITHUB_USERNAME = process.env.GITHUB_USERNAME
const GITHUB_PROJECT_URL = 'https://github.com/fentosv/' + process.env.GITHUB_PROJECT_NAME + '.git'
const GITHUB_COMMIT_NAME = process.env.GITHUB_COMMIT_NAME

const console_run = async () => {
    const commitName = commitNameChecker(GITHUB_COMMIT_NAME);

    try {
        execSync(`rimraf .git`)
        execSync(`git init`)
        execSync(`git config user.email ${GITHUB_EMAIL}`)
        execSync(`git config user.name ${GITHUB_USERNAME}`)
        execSync(`git add .`)
        execSync(`git commit -m "${commitName}"`)
        execSync(`git branch -M main`)
        execSync(`git remote add origin ${GITHUB_PROJECT_URL}`)
        execSync(`git push -u origin main`)

    } catch (error) {
        console.log(error.message);
    }
}

console_run()
