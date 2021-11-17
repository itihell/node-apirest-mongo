const { Router } = require("express");
const { check } = require("express-validator");
const {
  index,
  edit,
  update,
  destroy,
  store,
} = require("../controllers/users.controller");
const { isRolValid, existEmail, existId } = require("../helpers/db-validators");

const { validarCampos } = require("../middleware/validar-campos");

const router = Router();

router.get("/", index);
router.put(
  "/:id",
  [
    check("id", "No es un id valido").isMongoId(),
    check("id").custom((id) => existId(id)),
    check("rol").custom((rol) => isRolValid(rol)),
    validarCampos,
  ],
  edit
);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password debe contener mas 6 caracteres").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    //check("rol", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    check("rol").custom((rol) => isRolValid(rol)),
    check("correo").custom((correo) => existEmail(correo)),
    validarCampos,
  ],
  store
);
router.delete("/", destroy);
router.patch("/", update);

module.exports = router;
