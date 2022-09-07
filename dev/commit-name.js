const COMMAND_OPTION = process.argv.slice(2)[0];

//Select initial dashes
const reg = /\-?/g

const commitNameChecker = (GITHUB_COMMIT_NAME) => {
    if (COMMAND_OPTION) return COMMAND_OPTION.replace(reg, '')
    if (GITHUB_COMMIT_NAME) return GITHUB_COMMIT_NAME
    return 'Commit'
}

module.exports = { commitNameChecker }



