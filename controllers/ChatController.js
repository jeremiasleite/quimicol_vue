var Chat = require("../models/chat");

exports.save = function (_chat, callback){    
    Chat.collection.insert(_chat, function(error, docs){
        if(error){
            callback(null, {msg: 'Erro inesperado ao savar!', error: error})
        }else{
            callback({msg: 'Chats cadastrada com sucesso!'})
        }
    })
}

exports.findIdUsuario = function (_sala, callback){    
    Chat.find({ idUsuario: '222'}, function(error, docs){
        if(error){
            callback(null, {msg: 'Erro inesperado ao savar!', error: error})
        }else{
            callback(docs)
        }
    })
}