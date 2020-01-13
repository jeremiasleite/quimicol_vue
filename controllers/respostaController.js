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
    Resposta.find({}).sort('idSala').exec(function(err, docs) {
        if (!err){ 
            callback(docs);
        } else {
            callback(err);
        }
    })
}

exports.getQuestionario = function (callback){
    Resposta.find({}, 'questionario' ,function(err, docs) {
        if (err){ 
            callback(err);
        } else {
            var arrayOcorrencia1 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia2 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia3 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia4 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia5 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia6 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia7 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia8 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia9 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia10 = [0,0,0,0,0]//[1,2,3,4,5]
            var arrayOcorrencia11 = [0,0,0,0,0]//[1,2,3,4,5]
            var i;
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[0] == '1'){
                    arrayOcorrencia1[0]++;
                }else if(docs[i].questionario[0] == '2'){
                    arrayOcorrencia1[1]++;
                }else if(docs[i].questionario[0] == '3'){
                    arrayOcorrencia1[2]++;
                }else if(docs[i].questionario[0] == '4'){
                    arrayOcorrencia1[3]++;
                }else if(docs[i].questionario[0] == '5'){
                    arrayOcorrencia1[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[1] == '1'){
                    arrayOcorrencia2[0]++;
                }else if(docs[i].questionario[1] == '2'){
                    arrayOcorrencia2[1]++;
                }else if(docs[i].questionario[1] == '3'){
                    arrayOcorrencia2[2]++;
                }else if(docs[i].questionario[1] == '4'){
                    arrayOcorrencia2[3]++;
                }else if(docs[i].questionario[1] == '5'){
                    arrayOcorrencia2[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[2] == '1'){
                    arrayOcorrencia3[0]++;
                }else if(docs[i].questionario[2] == '2'){
                    arrayOcorrencia3[1]++;
                }else if(docs[i].questionario[2] == '3'){
                    arrayOcorrencia3[2]++;
                }else if(docs[i].questionario[2] == '4'){
                    arrayOcorrencia3[3]++;
                }else if(docs[i].questionario[2] == '5'){
                    arrayOcorrencia3[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[3] == '1'){
                    arrayOcorrencia4[0]++;
                }else if(docs[i].questionario[3] == '2'){
                    arrayOcorrencia4[1]++;
                }else if(docs[i].questionario[3] == '3'){
                    arrayOcorrencia4[2]++;
                }else if(docs[i].questionario[3] == '4'){
                    arrayOcorrencia4[3]++;
                }else if(docs[i].questionario[3] == '5'){
                    arrayOcorrencia4[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[4] == '1'){
                    arrayOcorrencia5[0]++;
                }else if(docs[i].questionario[4] == '2'){
                    arrayOcorrencia5[1]++;
                }else if(docs[i].questionario[4] == '3'){
                    arrayOcorrencia5[2]++;
                }else if(docs[i].questionario[4] == '4'){
                    arrayOcorrencia5[3]++;
                }else if(docs[i].questionario[4] == '5'){
                    arrayOcorrencia5[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[5] == '1'){
                    arrayOcorrencia6[0]++;
                }else if(docs[i].questionario[5] == '2'){
                    arrayOcorrencia6[1]++;
                }else if(docs[i].questionario[5] == '3'){
                    arrayOcorrencia6[2]++;
                }else if(docs[i].questionario[5] == '4'){
                    arrayOcorrencia6[3]++;
                }else if(docs[i].questionario[5] == '5'){
                    arrayOcorrencia6[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[6] == '1'){
                    arrayOcorrencia7[0]++;
                }else if(docs[i].questionario[6] == '2'){
                    arrayOcorrencia7[1]++;
                }else if(docs[i].questionario[6] == '3'){
                    arrayOcorrencia7[2]++;
                }else if(docs[i].questionario[6] == '4'){
                    arrayOcorrencia7[3]++;
                }else if(docs[i].questionario[6] == '5'){
                    arrayOcorrencia7[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[7] == '1'){
                    arrayOcorrencia8[0]++;
                }else if(docs[i].questionario[7] == '2'){
                    arrayOcorrencia8[1]++;
                }else if(docs[i].questionario[7] == '3'){
                    arrayOcorrencia8[2]++;
                }else if(docs[i].questionario[7] == '4'){
                    arrayOcorrencia8[3]++;
                }else if(docs[i].questionario[7] == '5'){
                    arrayOcorrencia8[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[8] == '1'){
                    arrayOcorrencia9[0]++;
                }else if(docs[i].questionario[8] == '2'){
                    arrayOcorrencia9[1]++;
                }else if(docs[i].questionario[8] == '3'){
                    arrayOcorrencia9[2]++;
                }else if(docs[i].questionario[8] == '4'){
                    arrayOcorrencia9[3]++;
                }else if(docs[i].questionario[8] == '5'){
                    arrayOcorrencia9[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[9] == '1'){
                    arrayOcorrencia10[0]++;
                }else if(docs[i].questionario[9] == '2'){
                    arrayOcorrencia10[1]++;
                }else if(docs[i].questionario[9] == '3'){
                    arrayOcorrencia10[2]++;
                }else if(docs[i].questionario[9] == '4'){
                    arrayOcorrencia10[3]++;
                }else if(docs[i].questionario[9] == '5'){
                    arrayOcorrencia10[4]++;
                }
            }
            for(i =0; i< docs.length;i++){
                if(docs[i].questionario[10] == '1'){
                    arrayOcorrencia11[0]++;
                }else if(docs[i].questionario[10] == '2'){
                    arrayOcorrencia11[1]++;
                }else if(docs[i].questionario[10] == '3'){
                    arrayOcorrencia11[2]++;
                }else if(docs[i].questionario[10] == '4'){
                    arrayOcorrencia11[3]++;
                }else if(docs[i].questionario[10] == '5'){
                    arrayOcorrencia11[4]++;
                }
            }
            //console.log(arrayOcorrencia1)
            callback({q1: arrayOcorrencia1, q2: arrayOcorrencia2, q3: arrayOcorrencia3, q4: arrayOcorrencia4, q5: arrayOcorrencia5, 
                q6: arrayOcorrencia6, q7: arrayOcorrencia7, q8: arrayOcorrencia8, q9: arrayOcorrencia9, q10: arrayOcorrencia10, q11: arrayOcorrencia11});
        }
    })
}