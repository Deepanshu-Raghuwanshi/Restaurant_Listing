const express = require("express");

const router = express.Router();
const {
  save,
  get,
  edit,
  deletee,
  getDataById,
} = require("../controller/restaurantCurd");

router.get("/", async (req, res) => {
  const data = await get();
  res.json({ data: data });
});

router.get("/getDataById", async (req, res) => {
  let id = req.body.id;
  console.log(id, "from routes");
  const data = await getDataById(id);
  res.json({ data: data });
});

router.post("/", async (req, res) => {
  let data = await save(req.body);
  res.json({
    message: "sucess",
    data: data,
  });
});

router.put("/:id", async (req, res) => {
  req.body.id = req.params.id;
  let toEdit = await edit(req.body);
  res.json({
    message: "sucess",
    data: toEdit,
  });
});

router.post("/delete", async (req, res) => {
  let id = req.body.id;

  let toDelete = await deletee(id);
  res.json({
    message: "sucess",
    data: toDelete,
  });
});

module.exports = router;
