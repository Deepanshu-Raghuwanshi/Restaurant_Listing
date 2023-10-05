const { restaurants } = require("../models/restaurantModel");

const save = (data) => {
  return restaurants.create(data);
};

const get = (data) => {
  return restaurants.findAll();
};

const edit = (data) => {
  return restaurants.update(data, {
    where: {
      id: data.id,
    },
  });
};

const deletee = (id) => {
  return restaurants.destroy({
    where: {
      id: id,
    },
  });
};

const getDataById = (id) => {
  return restaurants.findOne({
    where: { id: id },
  });
};

const deleteDishesByName = (restaurantId, dishName) => {
  return restaurants.destroy({
    where: {
      id: restaurantId,
    },
    "dishes.name": dishName,
  });
};

module.exports = {
  save,
  get,
  edit,
  deletee,
  getDataById,
  deleteDishesByName,
};
