const { Router } = require("express");
const {
  index,
  update,
  destroy,
  store,
} = require("../controllers/users.controller");

const router = Router();

router.get("/", index);
router.put("/", (req, res) => {
  res.json({
    message: "put",
  });
});
router.post("/", store);
router.delete("/", destroy);
router.patch("/", update);

module.exports = router;
