const fs = require('fs');
const axios = require('axios')
let filePath = process.argv[2]
let out = false;
let outPath='./newfile.txt'

// if (filePath.startsWith("--out")){
//     out = true;
//     outPath = process.argv[3]
//     filePath = process.argv[4]
// }

out=true;
filePath="./dummyfile.txt"
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
            if (!out){
                console.log(data)
            } else {
                writeToFile(outPath, data)
            }
            
            process.exit(0)
        }
    })
}

async function webCat(url) {
    const response = await axios.get(url)
    if (!out){
        console.log(response.data)
    } else {
        writeToFile(outPath, response.data)
    }
    process.exit(0)
}

function writeToFile(outPath, data) {
    fs.writeFileSync(outPath, data, 'utf8', function(err) {
        if (err) {
          console.error(`Couldn't write ${out}: ${err}`);
          process.exit(1);
        }
        console.log("successfully write to file")
    });
}