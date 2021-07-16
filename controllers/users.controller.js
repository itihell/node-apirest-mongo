const { response } = require("express");

const index = (req, res = response) => {
  const { q, nombre = "No nombre", page = 1, limit } = req.query;

  res.json({
    message: "Listado de usuarios de las apllicacion",
    q,
    nombre,
    page,
    limit,
  });
};

const edit = (req, res = response) => {
  const id = req.params.id;
  res.json({
    message: "Modificar un usuario put",
    id: id,
  });
};

const store = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    message: "Guardando un nuevo usuario",
    nombre,
    edad,
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
  edit,
};
