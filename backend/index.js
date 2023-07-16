const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./router/appRouter");
const cors = require("cors");
app.use(express.json());
app.use(userRouter);
app.use(cors());

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.send("Hello World!");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/mernApp")
  .then(() => {
    console.log("Data base conneted");
  })
  .catch((err) => {
    console.log("Error while connecting DB", err);
  });

app.listen(5000, () => {
  console.log("Server is running at :", 5000);
});
