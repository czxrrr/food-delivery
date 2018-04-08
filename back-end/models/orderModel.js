var mongoose = require("mongoose");
var OrderSchema = new mongoose.Schema(
    {
      user:{
          type:mongoose.Schema.ObjectId,
          ref:'User'
      },
      total:Number,
        recipes:[{
          recipes:{
              type:mongoose.Schema.ObjectId,
              ref:'Recipe'
          },
            number:Number
        }]
    }
);

module.exports = OrderSchema;