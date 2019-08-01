const fs = require('fs');
const path = require('path');
const { myRequest } = require('./api');

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
        ico: "image/x-icon",
        png: "image/png"
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

function handleQuery(req, res, endpoint) {
  //let input = endpoint.split('=')[1];
  let url = "http://api.ratesapi.io/api/latest?base=GBP";

  myRequest(url, (err, result) => {
    if(err) {
        res.end("Error");
    } else {
      res.end(JSON.stringify(result.body.rates));
    }
  });

  }

module.exports = { handleHome, handlePublic, handleQuery };
