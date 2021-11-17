const Rol = require("../models/rol");
const isRolValid = async (rol = "") => {
  const existeRol = await Rol.findOne({ rol });
  if (!existeRol) {
    throw new Error(`El ${rol} no es valido`);
  }
};

module.exports = { isRolValid };
