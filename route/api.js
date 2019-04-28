const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

//get a list of ninjas from the db
router.get("/ninjas", function(req, res){
    res.send({type:"GET"});
});

//add a new ninja to the db using POST
router.post("/ninjas", function(req, res, next){
    
    //save and create the new ninja to the DB
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
        res.end();
    }).catch(next);//end of the promise
    
});

//update a ninja using PUT
router.put("/ninjas/:id", function(req, res){
    res.send({type:"PUT"});
});

//delete a ninja using DELETE
router.delete("/ninjas/:id", function(req, res){
    res.send({type:"DELETE"});
});

module.exports = router;
