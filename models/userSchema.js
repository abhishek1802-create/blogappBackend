const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  userPassword: {
    type: String,
    require: true,
  },
  userCity: {
    type: String,
    require: true,
  },
  userState: {
    type: String,
    require: true,
  },
  userPhone: {
    type: Number,
    require: true,
  },
  profilePic: {
    type: String,
  },
  userRole: {
    type: String,
    require: true,
    default: "user",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
userSchema.set("timestamps", true);

module.exports = mongoose.model("userData", userSchema);
