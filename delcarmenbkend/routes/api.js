var express = require('express');
var router = express.Router();

function apiInit(db){

    var usersApi = require('./api/users')(db);
    var coffeeApi = require('./api/coffee')(db);
    var distBinApi = require('./api/distbin')(db);
    var reservationsApi = require('./api/reservations')(db);

    function verificarLogin(req, res, next){
        var isLoggedIn = req.session.logged && true;
        if(isLoggedIn){
            next();
        }else{
            res.status(403).json({"error": "No Autorizado"});
        }
    }
    
    router.use('/users', usersApi);
    router.use('/coffee', verificarLogin, coffeeApi);
    router.use('/distbin', distBinApi);
    router.use('/reservations', reservationsApi);
        return router; 
}
module.exports = apiInit;