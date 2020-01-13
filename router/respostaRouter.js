var express = require('express');
var router = express.Router();

var RespostaController = require('../controllers/respostaController')

router.route('/').get(function (req, res) {
    RespostaController.findAll(function (respostas, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(respostas);
        }
    });
});

router.route('/questionarios').get(function (req, res) {
    RespostaController.getQuestionario(function (respostas, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(respostas);
        }
    });
});

module.exports = router;