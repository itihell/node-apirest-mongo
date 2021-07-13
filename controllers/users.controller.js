const { response } = require("express");

const index = (req, res = response) => {
  res.json({
    message: "Listado de usuarios de las apllicacion",
  });
};

const store = (req, res = response) => {
  res.json({
    message: "Guardando un nuevo usuario",
  });
};

const update = (req, res = response) => {
  res.json({
    message: "Actualizando usuario",
  });
};

const destroy = (req, res = response) => {
  res.json({
    message: "Eliminando usuario desde el controlador",
  });
};

module.exports = {
  index,
  store,
  update,
  destroy,
};
