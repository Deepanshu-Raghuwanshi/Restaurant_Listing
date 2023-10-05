const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const password = process.env.PASSWORD;

const sequelize = new Sequelize("Restaurant-List", "admin", password, {
  host: "mysql-148735-0.cloudclusters.net",
  port: 10023,
  dialect: "mysql",
});

const restaurants = sequelize.define("restaurant", {
  name: DataTypes.TEXT,
  address: DataTypes.TEXT,
  email: DataTypes.TEXT,
  mobile: DataTypes.INTEGER,
  dishes: DataTypes.TEXT,
  image: DataTypes.TEXT,
});

const user = sequelize.define("users", {
  name: DataTypes.TEXT,
  username: DataTypes.TEXT,
  password: DataTypes.TEXT,
  mobile: DataTypes.INTEGER,
});

module.exports = { restaurants, sequelize, user };
