const Rol = require("../models/rol");
const user = require("../models/user");
const isRolValid = async (rol = "") => {
  const existeRol = await Rol.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El ${rol} no es valido`);
  }
};

const existEmail = async (correo = "") => {
  // TODO: Validar si el correo existe

  const correExistente = await user.findOne({ correo: correo });

  if (correExistente) {
    throw new Error(`El email: ${correo} ya está en uso`);
  }
};

module.exports = { isRolValid, existEmail };
