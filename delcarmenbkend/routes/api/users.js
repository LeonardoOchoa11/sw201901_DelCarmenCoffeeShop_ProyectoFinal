var uuidv4 = require('uuidv4');
var express = require('express');
var router = express.Router();

function usersInit(db){

  var usersModel = require('./usersModel')(db);

  var usersCoffee = {
    'Correo':'',
    'Usuario':'',
    'Password':''
  };
  router.get('/all', function (req, res, next) {
        usersModel.getAllUsers(
            function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({error:"Algo paso con el cafe :("});
                }
                return res.status(200).json(docs);
            }
        );
    }); 

  router.post('/new', function (req, res, next){
    var _userNewData = Object.assign({}, usersCoffee, req.body);
    usersModel.addNewUser(_userNewData, (err, newUser)=>{
        if (err) {
          console.log(err);
          return res.status(500).json({"error":"No pudimos agregar el nuevo usuario :("});
        } else {
          return res.status(200).json(newUser);
        }
    });
  });

  /*router.post('/new', function (req, res, next) {
    var _userData = req.body;
    console.log(_userData);
    res.json({ "msg": "ok" });
  }); //New Post*/

  router.post('/login', function (req, res, next) {
    var _userData = req.body;
    var email = String;
    var password = String;
    _userData.email = email;
    _userData.password = password;
    console.log(_userData);
   // res.json({ "msg": "ok" });
    if (req.body.txtEmail === "fulanito"
      && req.body.txtPswd === "detal") {
      req.session.logged = true;
      req.session.loggeduser = req.body.email;
      res.status(200).json({ "msg": "ok" });
    } else {
      res.status(403).json({ "error": "Credenciales no válidas" });
    }
  }); // Post Login

  router.get('/logout', function (req, res, next) {
    var _userData = req.body;
    req.session.logged = false;
    req.session.loggeduser = null;
    res.json({ "msg": "ok" });
  });// Get Logout

  router.get('/session', function (req, res, next) {
    res.json({ "active": req.session.logged && true });
  });// Get Session Status


  return router;
}

module.exports = usersInit;