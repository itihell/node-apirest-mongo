const { Schema, model } = require("mongoose");

const UserSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El campo es requerido"],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "La contraseña es requeridad"],
  },
  img: {
    type: String,
  },
  rol: {
    type: String,
    required: [true],
    enum: ["ADMIN_ROLE", "USER_ROLE"],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

module.exports = model("User", UserSchema);
