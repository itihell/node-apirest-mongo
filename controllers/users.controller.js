const { response } = require("express");
const bcryptjs = require("bcryptjs");
const User = require("../models/user");

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

const edit = async (req, res = response) => {
  const id = req.params.id;
  const { _id, password, google, correo, ...datos } = req.body;

  if (password) {
    //TODO: Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    datos.password = bcryptjs.hashSync(password, salt);
  }
  const user = await User.findByIdAndUpdate(id, datos);

  res.json({
    message: "Modificar un usuario put",
    user,
  });
};

const store = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;

  const user = new User({
    nombre,
    correo,
    password,
    rol,
  });

  //TODO: Encriptar la contraseña
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  res.json({
    message: "Guardando un nuevo usuario",
    user,
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
