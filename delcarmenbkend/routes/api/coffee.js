var uuidv4 = require('uuidv4');
var express = require('express');
var router = express.Router();

function coffeeInit(db){

    
    var mongoModel = require('./mongoModel')(db);

    var coffeeTp = {
        'Articulo': '',
        'Precio': '',
        'Descripcion':'',
        'fchPedido':'',
        'done':false,
        'fchFinal':''
    };

    router.get('/all', function (req, res, next) {
        mongoModel.getAllCoffee(
            function (err, docs) {
                if (err) {
                    console.log(err);
                    return res.status(500).json({error:"Algo paso con el cafe"});
                }
                return res.status(200).json(docs);
            }
        );
    }); // Final getAllCoffee

    router.get('/byid/:CoffeeId', (req, res, next)=>{
        mongoModel.getCoffeeById(req.params.CoffeeId, (err, CoffeeDoc)=>{
          if (err) {
              console.log(err);
              return res.status(500).json({"error":"Error al obtener el cafe :("});
          }else{
              return res.status(200).json(CoffeeDoc);
          }  
        }); //Get Coffee by Id
    }); // By Id : Coffee Id


    router.get('/bytags/:tag', (req, res, next)=>{
        mongoModel.searchByTag((req.params.tag || '').split('_'), (err, docs)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({"error":"No se encontro el tag :("});
            } else {
               return res.status(200).json(docs); 
            }
        }); // Search by Tags
    }); //By tags

    router.post('/new', function(req,res,next){
        var _CoffeeData = Object.assign({}, coffeeTp, req.body);
        mongoModel.addNewCoffee(_CoffeeData, (err, newCoffee)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({"error":"No se puede agregar :("});
            } else {
                return res.status(200).json(newCoffee);
            }
        });
    }); //Add new coffee

    router.put('/done/:CoffeeId', function (req, res, next) {
        var _CoffeeId = req.params.CoffeeId;
        mongoModel.toggleCoffeeDone(_CoffeeId, (err, rslt)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({"error":"No se pudo actualizar :("})
            } else {
                return res.status(200).json(rslt);
            }
        });
    }); //Final Coffee Done

    router.delete('/delete/:CoffeeId', function (req, res, next) {
        var _CoffeeId = req.params.CoffeeId;
        mongoModel.deleteById(_CoffeeId, (err, result)=>{
            if (err) {
                console.log(err);
                return res.status(500).json({"error": "No se pudo eliminar la taza vacia :("});
            } else {
                return res.status(200).json(result);
            }
        });
    }); // Delete Coffee by Id

    return router;
} // Final coffeeInit

module.exports = coffeeInit;