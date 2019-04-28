const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create the schema and the model
const NinjaSchema = new Schema({
    name:{
        type:String,
        required:[true, "Name field is required"]
    },
    rank:{
        type:String,
    },
    available:{
        type:Boolean,
        default:false
    }
    //add geolocation
});

const Ninja = mongoose.model("ninja",NinjaSchema);

//export our module(file)
module.exports = Ninja;