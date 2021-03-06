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

app.get('/build/src/styles/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/src/styles/styles.css'));
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
      var i = 0;
      socket.emit('server request', {
        date: new Date(),
        value: [
          {point: 5, index:0},
          {point: Math.random(), index:1},
          {point: Math.random(), index:2},
          {point: Math.random(), index:3},
          {point: Math.random(), index:4},
          {point: Math.random(), index:5},
          {point: Math.random(), index:6},
          {point: Math.random(), index:7},
          {point: Math.random(), index:8},
          {point: Math.random(), index:9},
          {point: Math.random(), index:10},
          {point: Math.random(), index:11},
          {point: Math.random(), index:12},
          {point: Math.random(), index:13},
          {point: Math.random(), index:14},
          {point: 3, index:15},
          {point: Math.random(), index:16},
          {point: Math.random(), index:17},
          {point: Math.random(), index:18},
          {point: Math.random(), index:19},
          {point: Math.random(), index:20},
          {point: Math.random(), index:21},
          {point: Math.random(), index:22},
          {point: Math.random(), index:23},
          {point: Math.random(), index:24},
          {point: Math.random(), index:25},
          {point: Math.random(), index:26},
          {point: Math.random(), index:27},
          {point: Math.random(), index:28},
          {point: Math.random(), index:29},
          {point: Math.random(), index:30}
        ],
        conversion: [
          {point: 0, index:0},
          {point: Math.random(), index:1},
          {point: Math.random(), index:2},
          {point: Math.random(), index:3},
          {point: 6, index:4},
          {point: Math.random(), index:5},
          {point: Math.random(), index:6},
          {point: Math.random(), index:7},
          {point: Math.random(), index:8},
          {point: 9, index:9},
          {point: Math.random(), index:10},
          {point: Math.random(), index:11},
          {point: Math.random(), index:12},
          {point: Math.random(), index:13},
          {point: Math.random(), index:14},
          {point: 0, index:15},
          {point: Math.random(), index:16},
          {point: Math.random(), index:17},
          {point: 0, index:18},
          {point: Math.random(), index:19},
          {point: Math.random(), index:20},
          {point: Math.random(), index:21},
          {point: Math.random(), index:22},
          {point: Math.random(), index:23},
          {point: Math.random(), index:24},
          {point: Math.random(), index:25},
          {point: Math.random(), index:26},
          {point: Math.random(), index:27},
          {point: Math.random(), index:28},
          {point: Math.random(), index:29},
          {point: Math.random(), index:30}
        ],
        errors: [
          {point: 100, index:0},
          {point: 50, index:1},
          {point: 25, index:2},
          {point: Math.random(), index:3},
          {point: 6, index:4},
          {point: Math.random(), index:5},
          {point: Math.random(), index:6},
          {point: 10, index:7},
          {point: Math.random(), index:8},
          {point: 9, index:9},
          {point: Math.random(), index:10},
          {point: Math.random(), index:11},
          {point: Math.random(), index:12},
          {point: Math.random(), index:13},
          {point: Math.random(), index:14},
          {point: 0, index:15},
          {point: Math.random(), index:16},
          {point: Math.random(), index:17},
          {point: 0, index:18},
          {point: Math.random(), index:19},
          {point: Math.random(), index:20},
          {point: Math.random(), index:21},
          {point: Math.random(), index:22},
          {point: Math.random(), index:23},
          {point: Math.random(), index:24},
          {point: Math.random(), index:25},
          {point: Math.random(), index:26},
          {point: Math.random(), index:27},
          {point: Math.random(), index:28},
          {point: Math.random(), index:29},
          {point: Math.random(), index:30}
        ],
        latency: [
          {point: 0, index:0},
          {point: 0, index:1},
          {point: 0, index:2},
          {point: 10, index:3},
          {point: 9, index:4},
          {point: 8, index:5},
          {point: 7, index:6},
          {point: 6, index:7},
          {point: Math.random(), index:8},
          {point: Math.random(), index:9},
          {point: 0, index:10},
          {point: Math.random(), index:11},
          {point: Math.random(), index:12},
          {point: Math.random(), index:13},
          {point: Math.random(), index:14},
          {point: 3, index:15},
          {point: Math.random(), index:16},
          {point: Math.random(), index:17},
          {point: Math.random(), index:18},
          {point: 35, index:19},
          {point: Math.random(), index:20},
          {point: Math.random(), index:21},
          {point: Math.random(), index:22},
          {point: 20, index:23},
          {point: Math.random(), index:24},
          {point: Math.random(), index:25},
          {point: Math.random(), index:26},
          {point: 10, index:27},
          {point: Math.random(), index:28},
          {point: Math.random(), index:29},
          {point: Math.random(), index:30}
        ],
      });
      timeoutId = setTimeout(generateServerRequest, periodInMilliseconds);
  };

  socket.on('disconnect', handleDisconnect);
  timeoutId = setTimeout(generateServerRequest, periodInMilliseconds);
});
