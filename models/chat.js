const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  usuario: {
    type: String,
    require: true
  },
  sala: {
    type: String,   
    required: true    
  },
  idUsuario: {
    type: String
  },
  jogador: {
    type: String
  },
  msg: {
    type: String
  },
  hora: {
    type: String
  }
});

module.exports = mongoose.model("Chat", chatSchema);