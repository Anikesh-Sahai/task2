const friendController = require("../controllers/friendController");
const authController = require("../controllers/authController");

const express = require("express");

const router = express.Router();

router
  .route("/addFriend")
  .post(authController.protect, friendController.addFriend);
router
  .route("/getFriends")
  .get(authController.protect, friendController.GetFriends);

router
  .route("/updateFriend/:id")
  .patch(authController.protect, friendController.UpdateFriend);

module.exports = router;
