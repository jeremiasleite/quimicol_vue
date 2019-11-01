var app = require('express')();
var express = require('express')
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http').createServer(app);
//console.log(http)
var io = require('socket.io')(http);

var usuarios= [];
var contUser = 0;
var mensagens = []

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

//var app = express();


app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
  //res.send("oi");
});

//app.use('/login', indexRouter);
//app.use('/users', usersRouter);

io.on('connection', function (socket) {
  console.log('a user connected: '+ socket.id);

  socket.on('chat-message', function(msg){
    mensagens.push(msg)
    io.emit('chat-message', msg)
    //console.log(msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  /*contUser++;
  socket.on('sendUser', function(data){
      var user = { username: data, id: socket.id}
      usuarios.push(user)
      //console.log(usuarios);
      socket.emit('estadoLogin', 'ok');
  })
  
  socket.on('sendMsgChat', function(data){        
      mensagens.push(data)
      //console.log(usuarios);
      socket.broadcast.emit('allMsgChat', data);
  })

  socket.on('enviarRespServ', function(data){        
      respostas.push(data)
      console.log(respostas)
  })
  socket.on('enviarJustServ', function(data){        
      justificativas.push(data)
      console.log(justificativas)
  })
  if(contUser == 1){
      socket.emit('mensagem', 'aguardando outro usuário');
  }else if(contUser ==2){
      socket.emit('mensagem', 'iniciar atividade');
  }else if(contUser>2){
      socket.emit('mensagem', 'usuario será disconectado');
      //socket.disconnect()
  }*/

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
  




