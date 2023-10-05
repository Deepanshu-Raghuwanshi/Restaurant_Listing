const { getByUsername } = require("./userCurd");
const bcrypt = require("bcrypt");

const Login = (req, res) => {
  getByUsername(req.body.username)
    .then((result) => {
      if (result) {
        bcrypt.compare(
          req.body.password,
          result.password,
          function (err, data) {
            if (!data) {
              res.json({
                message: "Password Wrong",
                data: null,
                error: "invalid password",
              });
            } else {
              res.json({
                message: "Sucess login",
                data: result,
              });
            }
          }
        );
      } else {
        res.json({
          message: "Invalid Username Password",
          data: null,
          error: "Username not found",
        });
      }
    })
    .catch((err) => {
      res.json({
        message: "Invalid Username Password",
        data: null,
        error: err.toString(),
      });
    });
};
module.exports = Login;
