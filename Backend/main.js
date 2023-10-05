const { sequelize } = require("./models/restaurantModel");

const express = require("express");
const app = express();
const cors = require("cors");
const restaurantRoute = require("./routes/restaurantRoutes");
const userRoute = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use("/restaurant", restaurantRoute);
app.use("/user", userRoute);

const mysqlConnect = () => {
  return sequelize.authenticate();
};

mysqlConnect()
  .then((data) => {
    app.listen("8080", () => {
      console.log("express server started with mysql");
    });
  })
  .catch((err) => {
    console.log(err);
  });
