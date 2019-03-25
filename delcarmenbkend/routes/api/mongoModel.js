var ObjectId = require("mongodb").ObjectID;

function mongoModel(db){
    var lib = {};
    var cfe = db.collection('coffees');

    lib.getAllCoffee = (handler) =>{
        cfe.find({}).toArray(
            (err, docs) => {
                if (err) {
                    handler(err, null);
                }else{
                    handler(null, docs);
                }
            }
        ); //toArray
    } //Final de getAllCoffe

    lib.getCoffeeById = (CoffeeId, handler) => {
        cfe.findOne({ "_id": new ObjectId(coffeeId)}, (err, doc) => {
            if (err) {
                handler(err, null);
            }else{
                handler(null, doc);
            }
    }); //findOne
    } //getCoffeeById

    lib.addNewCoffee = (newCoffee, handler) => {
        cfe.insertOne(newCoffee, (err, r) => {
            if (err) {
                handler(err, null);
            }else{
                handler(null, r.result);
            }
        }); //Insert one Coffee
    }// Final addNewCoffee


    lib.addTagsToCoffee = (tags, id, handler) => {
        var curatedTags = Array.isArray(tags)? tags: [tags];
        var updateObject = {"$set": {"tags": curatedTags}};
        cfe.updateOne({"_id": ObjectId(id)}, updateObject, (err, rsult)=>{
            if (err) {
                handler(err, null);
            }else{
                handler(null, rsult.result);
            }
        }); //UpdateCoffee
    } //addTagstoCoffee

    lib.searchByTag = (tags, handler)=>{
        var queryObject = {"tags": {"$in": Array.isArray(tags)? tags: [tags]}};
        cfe.find(queryObject).toArray((err, docs)=>{
            if(err){
                handler(err, null);
            }else{
                handler(null, docs);
            }
        }); //toArray
    } //Search Coffee by tag

    lib.toggleCoffeeDone = (id, handler) => {
        var filter = {"_id": ObjectId(id)};
        cfe.findOne(filter, (err, doc)=>{
            if(err){
                handler(err, null);
            }else{
                if(doc){
                    var updateExpression = {};
                    if(doc.done){
                        updateExpression = {"$set": {done : false}};
                    }else{
                        updateExpression = {"$set": {done : true}};
                    }
                    cfe.updateOne(filter, updateExpression, (err, rslt)=>{
                        if(err){
                            handler(err, null);
                        }else{
                            handler(null, rslt.result);
                        }
                    }); // Update Status
                }else{
                    handler(new Error("El documento no Existe "), null)
                }
            }
        });// End toggleCoffeeDone
    }

    lib.deleteById = (Id, handler)=>{
        cfe.deleteOne({"_id": ObjectId(Id)}, (err, rslt)=>{
            if (err) {
                console.log(err);
                handler(err, null);
            }else{
                handler(null, rslt.result);
            }
        });// Delete Coffee
    } // Final DeletebyId


    return lib;

}

module.exports = mongoModel;