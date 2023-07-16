const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/userModel");

router.post("/create", async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const userData = await User.create({
      name,
      email,
      age,
    });
    res.status(200).json({
      message: "Entry created",
      success: true,
      Body: userData,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error in DB creation",
      success: false,
      error: error,
    });
  }
});

router.get("/alldata", async (req, res) => {
  try {
    const allData = await User.find();
    res.status(200).json(allData);
  } catch (error) {
    console.log("Error in fetching all the data", error);
    return res.status(401).json({
      message: "Error in fetching all the data",
      success: false,
      error: error.message,
    });
  }
});

router.get("/singleData/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allData = await User.findById({ _id: id });
    res.status(200).json({
      allData,
    });
  } catch (error) {
    console.log("Error in fetching all the data", error);
    return res.status(401).json({
      message: "Error in fetching all the data",
      success: false,
      error: error,
    });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age } = req.body;

    const allData = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({
      allData,
    });
  } catch (error) {
    console.log("Error in fetching all the data", error);
    return res.status(401).json({
      message: "Error in fetching all the data",
      success: false,
      error: error,
    });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const allData = await User.findByIdAndDelete({ _id: id });
    res.status(200).json({
      allData,
    });
  } catch (error) {
    console.log("Error in fetching all the data", error);
    return res.status(401).json({
      message: "Error in fetching all the data",
      success: false,
      error: error,
    });
  }
});
module.exports = router;
