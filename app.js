var app = require('express')();
var express = require('express')
var path = require('path');
const mongoose = require("mongoose");
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http').createServer(app);
//console.log(http)
var io = require('socket.io')(http);
var respostaController = require('./controllers/respostaController')
var chatController = require('./controllers/ChatController')

// Conecta no MongoDB
mongoose.connect( 
  "mongodb://jeremias:autocad789@ds031657.mlab.com:31657/daniel_imoveis",
  { useNewUrlParser: true }
);

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
});

app.get('/admin', function (req, res) {
  res.sendFile(__dirname + '/views/admin.html');  
});

app.use('/api/respostas', require('./router/respostaRouter'));
app.use('/api/chat', require('./router/chatRouter'));
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

    socket.emit('updatechat', 'SERVER', 'Você está conectado! Aguardando o outro usuário conectar...', id, pgmstart);

    socket.broadcast.to(id).emit('updatechat', username, username + ' has joined to this game !', id, pgmstart);
    if (pairCount === 2) {
      io.in(id).emit('usernames', usernamesArray[usernamesArray.length - 2], usernamesArray[usernamesArray.length - 1])
    }
  });


  socket.on('chat-message', function (msg) {
    mensagens.push(msg)
    io.in(msg.sala).emit('chat-message', msg)
    //console.log(msg);
  });

  socket.on('estado', function (sala, jogador, estado) {
    io.to(sala).emit('estado', sala, jogador, estado)
  })

  socket.on('etp6_respondida', function (sala, foiRespondida) {
    socket.broadcast.to(id).emit('etp6_respondida', foiRespondida)
  })

  socket.on('etp7_respondida', function (sala, foiRespondida) {
    socket.broadcast.to(id).emit('etp7_respondida', foiRespondida)
  })
  socket.on('etp8_respondida', function (sala, foiRespondida) {
    socket.broadcast.to(id).emit('etp8_respondida', foiRespondida)
  })

  socket.on('etp9_respondida', function (sala, foiRespondida) {
    socket.broadcast.to(id).emit('etp9_respondida', foiRespondida)
  })

  socket.on('etp10_respondida', function (sala, foiRespondida) {
    socket.broadcast.to(id).emit('etp10_respondida', foiRespondida)
  })

  socket.on('etp11_respondida', function (sala, foiRespondida) {
    socket.broadcast.to(id).emit('etp11_respondida', foiRespondida)
  })

  socket.on('enviarRespostas', function (respostas) {
    respostaController.save(respostas, function (dados, error) {
      if (error) {
        console.log(error)
      } else {
        console.log(dados)
      }
    })
  })

  socket.on('enviarChatLogs', function (chatLogs) {
    chatController.save(chatLogs, function (dados, error) {
      if (error) {
        console.log(error)
      } else {
        console.log(dados)
      }
    })
  })


  socket.on('disconnect', function () {
    delete usernames[socket.username];
    io.sockets.emit('updateusers', usernames);
    //io.sockets.in(id).emit('updatechat', 'SERVER', socket.username + ' has disconnected',id);
    socket.leave(socket.room);
  });


});

/*var respostas = {
  idSala: '2222',
  idUsuario: '21',
  usuario: 'jonathas',
  jogador: '1',
  q1: 'rq1',
  q2: 'oi',
  q3: 'oi2',
  q4: 'iu3',
  q5: 'oi4',
  q6: 'oi5',
  q7: 'oi6',
  q8: 'oi7',
  q9: 'oi8',
  questionario: ["oi", "oi2", "oi3"],
  estaAutorizado: true
}

respostaController.save(respostas, function (dados, error) {
  if (error) {
    console.log(error)
  } else {
    console.log(dados)
  }
})

respostaController.findAll( function(dados, error){
  if (error) {
    console.log(error)
  } else {
    console.log(dados)
  }
})*/
/*var chatLogs = [
  {
    jogador: 1,
    idSala: 2222,
    msg: "estou bem e voce",
    usuario: 'jeremias',
    idUsuario: '222',
    hora: "12:50:01"
  },
  {
    jogador: 2,
    idSala: 2222,
    msg: "bem sddsdsdsds",
    usuario: 'jeremias2',
    idUsuario: '223',
    hora: "12:50:01"
  }
]
chatController.save(chatLogs, function (dados, error) {
  if (error) {
    console.log(error)
  } else {
    console.log(dados)
  }
})*/
//console.log(chatLogs[0].sala)
respostaController.getQuestionario(function (dados, error){
  if (error) {
    console.log(error)
  } else {
    console.log(dados)
  }
})


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