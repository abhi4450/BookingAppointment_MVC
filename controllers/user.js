const User = require("../model/user");

exports.getUsers = (req, res, next) => {
  User.findAll().then((users) => {
    res.render("add-user", {
      users: users,
    });
  });
};
