const { Router } = require("express");
const {
  index,
  edit,
  update,
  destroy,
  store,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", index);
router.put("/:id", edit);
router.post("/", store);
router.delete("/", destroy);
router.patch("/", update);

module.exports = router;
