const Friends = require("../models/FriendsModel");
const catchAsync = require("../utils/catchAsync");
const { SUCCESS, CREATED_CODE, OK_CODE } = require("../utils/constants");

exports.addFriend = catchAsync(async (req, res, next) => {
  const friend = await Friends.create({ ...req.body, user: req.user?.id });

  res.status(CREATED_CODE).json({
    status: SUCCESS,
    data: {
      friend,
    },
  });
});

exports.GetFriends = catchAsync(async (req, res, next) => {
  const userFriends = await Friends.find({ user: req.user?._id });

  res.status(OK_CODE).json({
    status: SUCCESS,
    data: {
      userFriends,
    },
  });
});

exports.UpdateFriend = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { name, address } = req.body;

  const updatedProperties = {};

  if (name) updatedProperties.name = name;
  if (address) updatedProperties.address = address;

  const updatedFriend = await Friends.findByIdAndUpdate(id, updatedProperties, {
    new: true,
    runValidators: true,
  });

  console.log(updatedFriend);

  return res.status(OK_CODE).json({
    status: SUCCESS,
    data: {
      updatedFriend,
    },
  });
});
