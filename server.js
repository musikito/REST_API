const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const routes = require("./route/api");
const mongoose = require("mongoose");

//create the app
const app = express();

//connect to mongoDB
//mongoose.connect("mongodb://localhost/ninjago",{useNewUrlParser:true});
//override the mogoose promise(capital P)
//mongoose.Promise = global.Promise;
/* new way to connect to mongo DB using the call back error
(node:29092) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. 
To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
*/

//better way to connec to DB using mongoose.
mongoose.connect("mongodb://localhost/ninjago",{useNewUrlParser:true},function(error){
    if(!error){
        console.log("connected");
    }
})

//serving a static file
app.use(express.static("public"));

//set up the body parser
app.use(bodyParser.json());

//set the routes
app.use("/api",routes);

//error handling
app.use(function(err,req,res,next){
    //console.log(err.message);
    res.status(422).send({error:err.message});
})

//listening for requests
app.listen(port, () => {console.log(`Listening for requests on port ${port}`)});