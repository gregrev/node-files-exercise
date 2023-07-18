// use built-in files system module
const fs = require('fs');
// use global object process
const process = require('process');

function cat(path) {
    fs.readFile(path, 'utf8', function(err,data) {
        if (err) {
            console.error(err);
            process.exit(1);
        } else {
            console.log(data);
        }
    });
}

// import axios
const axios = require('axios');


async function webCat(url) {
    try {
        let response = await axios.get(url);
        console.log(response.data)
    } catch (err) {
        console.error(err);
    }
}

let path = process.argv[2];

// see if path starts with http
if (path.slice(0, 4) === 'http') {
    // if URL use webCat function
    webCat(path);
} else {
    // if a file path, use cat function
    cat(path);
}



