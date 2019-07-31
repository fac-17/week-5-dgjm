const http = require('http');
const router = require('./router');

const server = http.createServer(router);

let port = (process.env.PORT || 3000);

server.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
