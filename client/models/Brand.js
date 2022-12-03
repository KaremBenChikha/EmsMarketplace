const mongoose = require("mongoose");

//Create table into DB for Brand
const brandSchema = new mongoose.Schema(
    {
      checked: { type: Boolean, default: false, required: true },
      label: { type: String, required: true, unique: true },
    },
    {
      timestamps: true, //for date
    }
  );

// Brand is name of table 
module.exports = mongoose.model("Brand", brandSchema);