// models/DiagnosticLab.js
const mongoose = require("mongoose");
// const DiagnosticTest = require("./diagnosticTest.js");

const DiagnosticTestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const DiagnosticLabSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    // required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  testsOffered: [DiagnosticTestSchema],
});

const DiagnosticLab = mongoose.model("DiagnosticLab", DiagnosticLabSchema);

module.exports = DiagnosticLab;
