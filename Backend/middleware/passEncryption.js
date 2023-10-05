const bcrypt = require("bcrypt");
const saltRounds = 5;
const encryptPassword = (req, res, next) => {
  const password = req.body.password;
  console.log(password);
  console.log("from password encrypt");
  bcrypt.hash(password, saltRounds, function (err, hash) {
    if (err) {
      console.log(err);
      res.send("Error Password");
      return;
    }
    req.body.password = hash;
    next();
  });
};

module.exports = encryptPassword;
