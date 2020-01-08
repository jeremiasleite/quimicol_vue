const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  usename: {
    type: String,
    require: true
  },
  idSala: {
    type: String,   
    required: true    
  },
  idUsuario: {
    type: String
  },
  q1: {
    type: [String]
  },
  q2: {
    type: [String]
  },
  q3: {
    type: [String]
  },
  q5: {
    type: [String]
  },
  q5: {
    type: [String]
  },
  q6: {
    type: String
  },
  q7: {
    type: String
  },
  q8: {
    type: String
  },
  q9: {
    type: String
  },
});


mongoose.model("Resposta", UserSchema);