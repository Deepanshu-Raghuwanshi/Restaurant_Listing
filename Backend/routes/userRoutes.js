const express = require("express");
const encryptPassword = require("../middleware/passEncryption");
const router = express.Router();
const Login = require("../controller/userAuth");
const {
  save,
  get,
  edit,
  deletee,
  getByUsername,
} = require("../controller/userCurd");

router.get("/", async (req, res) => {
  const data = await get();
  res.json({ data: data });
});

router.post("/", encryptPassword, async (req, res) => {
  let data = await save(req.body);
  res.json({
    message: "Account Created Sucessfully",
    data: data,
  });
});

router.post("/login", Login);

router.put("/:id", async (req, res) => {
  req.body.id = req.params.id;
  let toEdit = await edit(req.body);
  res.json({
    message: "sucess",
    data: toEdit,
  });
});

router.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let toDelete = await deletee(id);
  res.json({
    message: "sucess",
    data: toDelete,
  });
});

module.exports = router;
