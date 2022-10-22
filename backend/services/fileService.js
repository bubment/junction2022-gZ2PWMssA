const fs = require('fs')

const readFile = (filePath) => {
    const rawdata = fs.readFileSync(filePath);
    return JSON.parse(rawdata);
}

module.exports.readFile = readFile;
