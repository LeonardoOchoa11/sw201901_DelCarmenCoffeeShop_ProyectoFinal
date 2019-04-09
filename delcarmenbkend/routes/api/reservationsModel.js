var ObjectId = require("mongodb").ObjectID;

function reservationsModel(db) {
    var lib = {};
    var profile = db.collection('reservations');

    lib.getAllreservations = (handler) => {
        profile.find({}).toArray(
            (err, docs) => {
                if (err) {
                    handler(err, null);
                } else {
                    handler(null, docs);
                }
            }
        ); //toArray
    }

    lib.addNewreservation = (newreservation, handler) => {
        profile.insertOne(newreservation, (err, result) => {
            if (err) {
                handler(err, null);
            } else {
                handler(null, result);
            }
        });
    }

    return lib;
}

module.exports = reservationsModel;