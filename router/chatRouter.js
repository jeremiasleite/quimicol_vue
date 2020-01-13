var express = require('express');
var router = express.Router();

var ChatController = require('../controllers/chatController')

router.route('/idusuario/:idUsuario').get(function (req, res) {
    ChatController.findIdUsuario(req.params.idUsuario,function (respostas, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(respostas);
        }
    });
});

router.route('/idsala/:idSala').get(function (req, res) {
    ChatController.findIdSala(req.params.idSala,function (respostas, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(respostas);
        }
    });
});

router.route('/').get(function (req, res) {
    ChatController.findAll(function (respostas, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(respostas);
        }
    });
});

module.exports = router;