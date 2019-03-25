var uuidv4 = require('uuidv4');
var express = require('express');
var router = express.Router();

function coffeeInit(db){

    var mongoModel = require('./mongoModel')(db);
}