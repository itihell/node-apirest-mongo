const { Router } = require("express");
const { check } = require("express-validator");
const {
  index,
  edit,
  update,
  destroy,
  store,
} = require("../controllers/users.controller");
const Rol = require("../models/rol");
const { validarCampos } = require("../middleware/validar-campos");

const router = Router();

router.get("/", index);
router.put("/:id", edit);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe contener mas 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    //check("rol", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom(async (rol = "") => {
      const existeRol = await Rol.findOne({ rol });
      if (!existeRol) {
        throw new Error(`El ${rol} no es valido`);
      }
    }),
    validarCampos,
  ],
  store
);
router.delete("/", destroy);
router.patch("/", update);

module.exports = router;
