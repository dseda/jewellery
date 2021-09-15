const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejs = require("ejs");
const Jewellery = require("./models/jewellery");

mongoose
  .connect("mongodb://localhost:27017/jewellery", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection open");
  })
  .catch((err) => {
    console.log("Error " + err);
  });

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/jewelleries", async (req, res) => {
  const jewelleries = await Jewellery.find({});
  res.render("jewelleries", { jewelleries });
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
