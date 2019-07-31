const fs = require('fs');
const path = require('path');

function handleHome(req, res, endpoint) {
    const filePath = path.join(__dirname, '..', 'public', 'index.html');
    fs.readFile(filePath, (err, file) => {
        if(err) {
            console.log(err);
            res.writeHead(500, { 'content-type': 'text/html'});
            res.end('<h1>Sorry, we had an error on our end!</h1>');
        } else {
            res.writeHead(200, { 'content-type': 'text/html'});
            res.end(file);
        }
    });
}

function handlePublic(req, res, endpoint) {
    const extension = endpoint.split('.')[1];
    const extensionType = {
        css: "text/css",
        js: "text/js",
        ico: "image/x-icon"
    };
    const filePath = path.join(__dirname, '..', endpoint);
    fs.readFile(filePath, (err, file) => {
        if(err) {
            console.log(err);
        } else {
            res.writeHead(200, { 'content-type': extensionType[extension]});
            res.end(file);
        }
    });
}

module.exports = { handleHome, handlePublic};