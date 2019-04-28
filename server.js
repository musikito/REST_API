const express = require("express");
const port = process.env.PORT || 5000;

const routes = require("./route/api");

const app = express();

app.use("/api",routes);


//listening for requests
app.listen(port, () => {console.log(`Listening for requests on port ${port}`)});