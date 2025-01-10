const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "please add the  Username"],
    },
    email: {
      type: String,
      // type and flag to show message
      require: [true, "please add the user-email address"],
      unique: [true, "Email address already taken"],
    },
    password: {
      type: String,
      require: [true, "please add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
