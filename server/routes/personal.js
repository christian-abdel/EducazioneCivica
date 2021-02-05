var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://abdel_christian:abdelgalvani2020@ilprimocluster.adniy.mongodb.net/educazioneCivica?retryWrites=true&w=majority";

/* GET users listing. */
router.get('/', function (req, res, next) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("educazioneCivica").collection("GDPgrowthPersonal");
        collection.find({}).toArray((err, result) => {
            if (err) console.log(err.message);
            else { res.send(result); console.log(result); }
            client.close();
        });
    });
});


module.exports = router;