const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");

const routes = require("./route/api");
//create the app
const app = express();
//set up the body parser
app.use(bodyParser.json());

//set the routes
app.use("/api",routes);


//listening for requests
app.listen(port, () => {console.log(`Listening for requests on port ${port}`)});