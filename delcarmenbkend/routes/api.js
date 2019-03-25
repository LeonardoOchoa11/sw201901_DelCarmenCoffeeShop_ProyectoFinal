var express = require('express');
var router = express.Router();

function apiInit(db){

    var usersApi = require('./api/users');
    var coffeeApi = require('./api/coffee')(db);
    

    router.use('/users', usersApi);
    router.use('/coffee', coffeeApi);

    return router; 
}
module.exports = apiInit;