const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
    type:{
        type: String,
        default: "Point"
    },
    coordinates:{
        type: [Number],
        index:"2dsphere"
    }
});

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
    },

    //add geolocation
    geometry: GeoSchema
});

const Ninja = mongoose.model("ninja",NinjaSchema);

//export our module(file)
module.exports = Ninja;