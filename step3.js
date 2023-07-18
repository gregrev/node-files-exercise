// use built-in files system module
const fs = require('fs');
const process = require('process');
const axios = require('axios');

function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            process.exit(1);
        } else {
            writeToFile(data, out);
        }
    });
}


async function webCat(url, out) {
    try {
        let response = await axios.get(url);
        writeToFile(response.data, out)
    } catch (err) {
        console.error(err);
    }
}


function writeToFile(text, out) {
    if (out) {
        // fs.writeFile(path, data, encoding, callback)
        fs.writeFile(out, text, 'utf8', (err) => {
            if (err) {
                console.error(`Can't write to ${out} : ${err}`);
            }
        });
    } else {
        console.log(text)
    }
}

// command line arguments v

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    // otherwise run command like in step2.js
    path = process.argv[2];
}

// see if path starts with http
if (path.slice(0, 4) === 'http') {
    // if URL use webCat function
    webCat(path, out);
} else {
    // if a file path, use cat function
    cat(path, out);
}


