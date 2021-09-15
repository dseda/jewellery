const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JewellerySchema = new Schema({
  reference: String,
  title: String,
  description: String,
  category: String,
  color: String,
  stone: String,
});

module.exports = mongoose.model("Jewellery", JewellerySchema);
