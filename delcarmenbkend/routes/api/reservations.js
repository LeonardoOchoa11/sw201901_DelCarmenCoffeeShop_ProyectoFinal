var uuidv4 = require('uuidv4');
var express = require('express');
var router = express.Router();

function reservationsInit(db) {

    var reservationsModel = require('./reservationsModel')(db);

    var reservationsCoffee = {
        'Descripcion': '',
        'Fecha': null,
        'Tipo': ''
    };
    router.get('/all', function (req, res, next) {
        reservationsModel.getAllreservations(
            function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ error: "Algo paso con el cafe :(" });
                }
                return res.status(200).json(docs);
            }
        );
    });

    router.post('/new', function (req, res, next) {
        var _reservationNewData = Object.assign({}, reservationsCoffee, req.body);
        var Fecha = new Date();
        Fecha.getDay();
        _reservationNewData.Fecha = Fecha;
        reservationsModel.addNewreservation(_reservationNewData, (err, newreservation) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ "error": "No pudimos agregar el nuevo usuario :(" });
            } else {
                return res.status(200).json(newreservation);
            }
        });
    });

    
    return router;
}

module.exports = reservationsInit;