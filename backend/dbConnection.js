const mongoose = require("mongoose");

const uri =
  // "mongodb+srv://aditya:aditya@cluster0.htk0w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  "mongodb+srv://aditi02:aditi120202@cluster0.6tk2t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

function dbConnection() {
  mongoose
    .connect(uri)
    .then((response) => {
      console.log("DB CONNECT SUCCESS");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
