const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")

const bcrypt = require("bcryptjs");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: true,
  },
  tokens: [{
    token: {
      type: String,
      required: true,
    }
  }]
});

userSchema.pre("save", async function (next) {
  // console.log("pre save");
  if (this.isModified("password")) {
    // console.log("password modified");
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }

  next();
});
//generating token
userSchema.methods.generateAuthToken = async function () {
  try {
    let tokenValue = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
    this.tokens = this.tokens.concat({ token: tokenValue })
    this.save();
    return tokenValue;
  } catch (error) {
    console.log(error)
  }
}
const User = mongoose.model("USER", userSchema);
module.exports = User;
