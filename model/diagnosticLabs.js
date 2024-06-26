// models/DiagnosticLab.js
const mongoose = require("mongoose");
const DiagnosticTest = require("./diagnosticTest.js");

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
  testsOffered: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: DiagnosticTest,
    },
  ],
});

const DiagnosticLab = mongoose.model("DiagnosticLab", DiagnosticLabSchema);

module.exports = DiagnosticLab;
