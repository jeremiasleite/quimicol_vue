var Resposta = require("../models/resposta");

exports.save = function (_resposta, callback){
    var novaResposta
    new Resposta(_resposta).save(function(error, resposta_){
        if(error){
            callback(null, {msg: 'Erro inesperado ao savar!', error: error})
        }else{
            callback(resposta_)
        }
    })
}