var express = require('express');
var router = express.Router();

function initDistBin(db){
    var dBinModel = require('./distbinModel')(db);
    router.get('/gettest/:page/:amount', (req, res, next)=>{
        dBinModel.getBinItems(parseInt(req.params.page), parseInt(req.params.amount), (err, docs)=>{
            if (err) {
                return res.status(500).json({"error":"No se pudo obtener"});
            }
            return res.status(200).json(docs);
        }); //getBinModel
    }); //getTests
    return router;
}

module.exports = initDistBin;