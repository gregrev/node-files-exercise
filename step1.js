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

// takes the 3rd argument in command line array in this example it is one.txt
cat(process.argv[2]);