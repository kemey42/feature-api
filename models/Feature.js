const mongoose = require("mongoose");
const { isEmail } = require("validator");

const schema = mongoose.Schema({
  featureName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, "invalid email"],
  },
  enable: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Feature", schema);
