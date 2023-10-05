const { user } = require("../models/restaurantModel");

const save = (data) => {
  console.log("from save");
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

module.exports = {
  save,
  get,
  edit,
  deletee,
};
