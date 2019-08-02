"use strict";

const http = require("http");
const https = require("https");

const myRequest = (url, cb) => {
  const protocol = url.includes("https") ? https : http;
  protocol
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
