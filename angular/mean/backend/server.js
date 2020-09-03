const http = require('http');
const debug = require('debug')('node-angular');
const app = require('./app');

const normalizePort = val => {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const onError = error =>  {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof addr === 'string' ? 'pipe' + addr : 'port' + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " required elevated privilages");
      process.exit(1);
      break;

    case "EADDRENUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;

    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + bind : "port" + port;
  debug("Listening on" + bind)
}

const port = normalizePort(process.env.PORT || "3000");  // for development
// const port = normalizePort(process.env.PORT || "8080");  // for  production
app.set('port', port);

// const server = http.createServer((req, res) => {
//   res.end('This my ferst response');
// })

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

server.listen(port);