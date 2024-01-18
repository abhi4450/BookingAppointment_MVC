const path = require("path");
const express = require("express");

const app = express();

const bodyParser = require("body-parser");
const rootDir = require("./util/path");
const sequelize = require("./util/database");
const User = require("./model/user");

const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

sequelize.sync().then(() => {
  console.log("Database synchronized");
});

app.use("/admin", adminRoutes);
app.use(userRoutes);
app.listen(3000, (req, res, next) => {
  console.log("server listening on PORT=3000");
});
