const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja");

//get a list of ninjas from the db
router.get("/ninjas", function(req, res){
  /* Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    });*/
    Ninja.aggregate().near({
        near:[parseFloat(req.query.Lng),parseFloat(req.query.lat)],
        maxDistance:100000,
        spherical:true,
        distanceField:"dist.calculated"

    }).then(function(ninjas){
        res.send(ninjas);
    });

   
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
    
    Ninja.findByIdAndUpdate({_id:req.params.id},req.body,{new:true}).then(function(ninja){
        res.send(ninja);
           
    });
});

//delete a ninja using DELETE
router.delete("/ninjas/:id", function(req, res,next){
    Ninja.findByIdAndDelete({_id:req.params.id}).then(function(ninja){
        res.send(ninja);

    });
   
});

module.exports = router;
