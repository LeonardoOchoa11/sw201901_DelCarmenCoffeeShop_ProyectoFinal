var ObjectId = require("mongodb").ObjectID;

function usersModel(db){
    var lib = {};
    var profile = db.collection('users');

    lib.getAllUsers = (handler) => {
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

    lib.addNewUser = (newUser, handler) => {
        profile.insertOne(newUser, (err, result) => {
            if (err) {
                handler(err, null);
            } else {
                handler(null, result);
            }
        }); 
    }

    return lib;
}

module.exports = usersModel;