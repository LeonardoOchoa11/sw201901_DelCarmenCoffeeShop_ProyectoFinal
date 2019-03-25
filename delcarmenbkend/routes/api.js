var express = require('express');
var router = express.Router();

function apiInit(db){

    var usersApi = require('./api/users');
    

    router.use('/users', usersApi);

    return router; 
}
module.exports = apiInit;