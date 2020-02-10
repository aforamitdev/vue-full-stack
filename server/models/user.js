const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstName: {
    type: String,
    require: true
  },
  lastName:{
    type:String,
    require:true,
  },
  email: {
    type: String,
    require: true
  },
  role: {
    type: String,
    default: "Player",
    enum: ["Player", "admin", "payment", "judge", "superadmin"]
  },
  dob:{
    type:Date,
    required:true,
  },
  password: {
    type: String,
    require: true
  }
});

module.exports = model("User", UserSchema);
