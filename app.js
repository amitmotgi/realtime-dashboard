var path = require('path');
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = process.env.PORT || "3000";
server.listen(port);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/bundle.js'));
});

io.sockets.on('connection', (socket) => {
  var periodInMilliseconds = 500;
  var timeoutId = -1;

  /**
   * Handle "disconnect" events.
   */
  var handleDisconnect = () => {
    clearTimeout(timeoutId);
  };

  /**
   * Generate a request to be sent to the client.
   */
  var generateServerRequest = () => {
      socket.emit('server request', {
        date: new Date(),
        value: Math.pow(Math.random(), 2)
      });
      timeoutId = setTimeout(generateServerRequest, periodInMilliseconds);
  };

  socket.on('disconnect', handleDisconnect);
  timeoutId = setTimeout(generateServerRequest, periodInMilliseconds);


});
