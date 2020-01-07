var app = require('express')();
var express = require('express')
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http').createServer(app);
//console.log(http)
var io = require('socket.io')(http);

var usernames = {};
var usernamesArray = []
var pairCount = 0, id, clientsno, pgmstart = 0, varCounter;
var mensagens = []

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

//var app = express();


app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
  //res.send("oi");
});

//app.use('/login', indexRouter);
//app.use('/users', usersRouter);

io.on('connection', function (socket) {
  console.log('a user connected: ' + socket.id);

  socket.on('addClient', function (username) {
    socket.username = username;
    usernames[username] = username;
    usernamesArray.push(username)    
    varCounter = 0
    //var id = Math.round((Math.random() * 1000000));
    pairCount++;
    if (pairCount === 1 || pairCount >= 3) {
      id = Math.round((Math.random() * 1000000));
      socket.room = id;
      pairCount = 1;
      console.log(pairCount + " " + id);
      socket.join(id);
      pgmstart = 1;
    } else if (pairCount === 2) {      
      console.log(pairCount + " " + id);
      socket.join(id);
      pgmstart = 2;
      //console.log(usernamesArray)
      
    }
    //console.log(usernames)
    console.log(username + " joined to " + id);

    socket.emit('updatechat', 'SERVER', 'Você está conectado! Aguardado o outro usuário conectar...', id, pairCount);

    socket.broadcast.to(id).emit('updatechat', username, username + ' has joined to this game !', id, pairCount);
    if(pairCount ===2){
      io.in(id).emit('usernames', usernamesArray[usernamesArray.length-2], usernamesArray[usernamesArray.length-1])
    }
  });


  socket.on('chat-message', function (msg) {
    mensagens.push(msg)
    io.in(msg.sala).emit('chat-message', msg)
    //console.log(msg);
  });

  socket.on('disconnect', function(){		
		delete usernames[socket.username];
		io.sockets.emit('updateusers', usernames);
		//io.sockets.in(id).emit('updatechat', 'SERVER', socket.username + ' has disconnected',id);
		socket.leave(socket.room);
	});


});

//module.exports = app;
var debug = require('debug')('quimica-vue:server');
var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

http.listen(port);
http.on('error', onError);
http.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = http.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}





