"use strict";

const http = require("http");

const myRequest = (url, cb) => {
  http
    .get(url, response => {
      let data = "";
      response.on("data", chunk => {
        data += chunk;
      });
      response.on("end", () => {
        const body = JSON.parse(data);
        const statusCode = response.statusCode;
        cb(null, { statusCode, body });
      });
    })
    .on("error", err => cb(err));
};

module.exports = { myRequest };
