const User = require("../model/user");

exports.addUser = (req, res, next) => {
  res.render("add-user");
};

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;

  User.create({
    name: name,
    email: email,
    phone: phone,
  })
    .then(() => {
      console.log("new user created");
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }

      return user.destroy();
    })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};
