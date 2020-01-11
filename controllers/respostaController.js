var Resposta = require("../models/resposta");

exports.save = function (_resposta, callback){    
    new Resposta(_resposta).save(function(error){
        if(error){
            callback(null, {msg: 'Erro inesperado ao savar!', error: error})
        }else{
            callback({msg: 'Resposta cadastrada com sucesso!'})
        }
    })
}

exports.findAll = function (callback){
    Resposta.find({},function(err, docs) {
        if (!err){ 
            callback(docs);
        } else {
            callback(err);
        }
    })
}