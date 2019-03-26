var express = require('express');
var router = express.Router();

function apiInit(db){

    var usersApi = require('./api/users');
    var coffeeApi = require('./api/coffee')(db);
    var distBinApi = require('./api/distbin')(db);
    
    router.use('/users', usersApi);
    router.use('/coffee', coffeeApi);
    router.use('/distbin', distBinApi);
        return router; 
}
module.exports = apiInit;