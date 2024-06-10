const express = require("express");
const router = express.Router();

const {
  getCategories,
  addNewCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");

router.get("/", async (req, res) => {
  try {
    const categories = await getCategories();
    res.status(200).send(categories);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

router.post("/",  async (req, res) => {
  try {
    const name = req.body.name;
    const newCategory = await addNewCategory(name);
    res.status(200).send(newCategory);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category_id = req.params.id;
    const name = req.body.name;
    const updatedCategory = await updateCategory(category_id, name);
    res.status(200).send(updatedCategory);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const category_id = req.params.id;
    const deletedCategory = await deleteCategory(category_id);
    res.status(200).send(deletedCategory);
  } catch (error) {
    res.status(400).send({
      message: error.message,
    });
  }
});

module.exports = router;
