const express = require("express");
const port = process.env.PORT || 5000;

const app = express();

app.get("/api",function(req,res){
    console.log("GET request");

    res.send({name:"Jose"});

});//end of app.get

//listening for requests
app.listen(port, () => {console.log(`Listening for requests on port ${port}`)});