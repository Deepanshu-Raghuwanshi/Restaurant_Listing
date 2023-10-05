const { user } = require("../models/restaurantModel");

const save = (data) => {
  return user.create(data);
};

const get = (data) => {
  return user.findAll();
};

const edit = (data) => {
  return user.update(data, {
    where: {
      id: data.id,
    },
  });
};

const deletee = (id) => {
  return user.destroy({
    where: {
      id: id,
    },
  });
};

const getByUsername = (username) => {
  return user.findOne({
    where: {
      username: username,
    },
  });
};

module.exports = {
  save,
  get,
  edit,
  deletee,
  getByUsername,
};
