var mongoose = require("mongoose");


var OrderSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.ObjectId,
            ref:'User'
        },
        cart:[{
            type:mongoose.Schema.ObjectId,
            ref:'Recipe'
        }],
        number:[Number],
        total:Number,
        phone:String,
        address:String,
        created_at: { type: Date, default: Date.now }
    }
);

module.exports = OrderSchema;