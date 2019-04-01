var ObjectId = require('mongodb').ObjectID;

function initDistBinModel(db) {
    var lib = {};
    var dbColl = db.collection('coffees');
    lib.getBinItems = (page = 1, amount = 20, handler)=>{
        var skipDocs = (page - 1) * amount;
        dbColl
        .find({})
        .project({"Test No": 1, "Resultado": 1})
        .sort({"Resultado": -1})
        .skip(skipDocs)
        .limit(amount)
        .toArray(
            (err, docs)=>{
                if (err) {
                    console.log(err);
                    handler(err, null);
                } else {
                    handler(null, docs);
                }
            }
        );
    }

    return lib;
};

module.exports = initDistBinModel;