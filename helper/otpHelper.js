const crypto = require("node:crypto");

const generateOTP = () => {
  const otp = crypto.randomInt(1000, 9999).toString();
  return otp;
};

module.exports = { generateOTP };
