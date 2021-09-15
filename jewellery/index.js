const Jewellery = require("../models/jewellery");
const jewelleries = require("./jewellery");
const jewels = require("./jewels");
const colors = require("./colors");
const categories = require("./categories");

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/jewellery")
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("Error " + err);
  });

const jewelleryDB = async () => {
  await Jewellery.deleteMany({});

  for (let i = 0; i < jewelleries.length; i++) {
    let random1 = Math.floor(Math.random() * jewels.length);
    let random2 = Math.floor(Math.random() * colors.length);
    let random3 = Math.floor(Math.random() * categories.length);
    const j = new Jewellery({
      reference: jewelleries[i].reference,
      title: jewelleries[i].title,
      description: jewelleries[i].description,
      category: categories[random3],
      color: colors[random2],
      stone: jewels[random1],
    });
    await j.save();
  }
};
jewelleryDB();
