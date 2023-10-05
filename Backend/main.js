const { sequelize } = require("./models/restaurantModel");

const express = require("express");
const app = express();
const cors = require("cors");
const restaurantRoute = require("./routes/restaurantRoutes");

app.use(cors());
app.use(express.json());
app.use("/restaurant", restaurantRoute);

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
