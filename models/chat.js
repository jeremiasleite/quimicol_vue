const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  usuario: {
    type: String,
    require: true
  },
  sala: {
    type: Number    
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
  },
  ordem:{
    type: Number
  }
});

module.exports = mongoose.model("Chat", chatSchema);