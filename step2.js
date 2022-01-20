const fs = require('fs');
const axios = require('axios')
const filePath = process.argv[2]
if (filePath.startsWith('https:')) {
    webCat(filePath)
}
else {
cat(filePath)
}

function cat(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.log(err)
            process.exit(1)
        }
        if (data) {
            console.log(data)
            process.exit(0)
        }
    })
}

async function webCat(url) {
    const response = await axios.get(url)
    console.log(response.data)
    process.exit(0)
}