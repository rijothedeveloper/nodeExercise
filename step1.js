const fs = require('fs');
const filePath = process.argv[2]
cat(filePath)
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