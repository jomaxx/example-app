import app from './app';
import http from 'http';
let server;

app.set('port', process.env.PORT);
server = http.createServer(app);

server.listen(process.env.PORT, function (err) {
  if (err) {
    throw err;
  }

  console.log('listening at localhost:' + process.env.PORT);
});

export default server;
