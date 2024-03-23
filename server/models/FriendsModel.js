const mongoose = require("mongoose");

const FriendsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Full Name is required"],
    trim: true,
  },
  address: {
    type: String,
    required: [true, "Full Name is required"],
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "A Friend belongs to a User"],
  },
});

const Friends = mongoose.model("Friends", FriendsSchema);

module.exports = Friends;
