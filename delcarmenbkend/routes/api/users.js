var express = require('express');
var router = express.Router();

router.post('/new', function (req, res, next) {
    var _userData = req.body;
    console.log(_userData);
    res.json({"msg":"ok"});
}); //New Post

router.post('/login', function (req, res, next) {
   var _userData = req.body;
   console.log(_userData);
   res.json({"msg":"ok"});
   if(req.body.email === "CORREOPORCAMBIAR@BLACKED.COM"
    && req.body.password ==="CONTRASEÑA") {
        req.session.logged = true;
        req.session.loggeduser = req.body.email;
        res.status(200).json({"msg":"ok"});
    } else {
        res.status(403).json({"error":"Credenciales no válidas"});
    } 
}); // Post Login

router.get('/logout', function (req, res, next) {
    var _userData = req.body;
    req.session.logged=false;
    req.session.loggeduser = null;
    res.json({ "msg": "ok" });
  });// Get Logout
  
  router.get('/session', function (req, res, next) {
    res.json({ "active": req.session.logged && true});
  });// Get Session Status

module.exports = router;