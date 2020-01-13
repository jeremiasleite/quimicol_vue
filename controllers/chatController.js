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

exports.findIdUsuario = function (_idUsuario, callback){    
    Chat.find({ idUsuario: _idUsuario}, function(error, docs){
        if(error){
            callback(null, {msg: 'Erro inesperado ao savar!', error: error})
        }else{
            callback(docs)
        }
    })
}

exports.findAll = function (callback){    
    Chat.find(function(error, docs){
        if(error){
            callback(null, {msg: 'Erro inesperado ao savar!', error: error})
        }else{
            callback(docs)
        }
    })
}

exports.findIdSala = function (_idSala, callback){
    //console.log(_idSala)    
    Chat.find({ sala: _idSala}, function(error, docs){
        if(error){
            callback(null, {msg: 'Erro inesperado ao savar!', error: error})
        }else{
            callback(docs)
        }
    })
}
