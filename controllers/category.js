const Category = require("../models/category");


const getCategories = async () => {
    const categories = await Category.find().sort({ name: 1 });
    return categories;
  };


  const addNewCategory = async (name) => {
    const newCategory = new Category({
      name: name,
    });
    // save
    await newCategory.save();
    return newCategory;
  };

  const updateCategory = async (_id, name) => {
    const updatedCategory = await Category.findByIdAndUpdate(
      _id,
      {
        name: name,
      },
      {
        new: true,
      }
    );
    return updatedCategory;
  };

  const deleteCategory = async (_id) => {
    const deletedCategory = await Category.findByIdAndDelete(_id);
    return deletedCategory;
  };
  
  module.exports = {
    getCategories,
    addNewCategory,
    updateCategory,
    deleteCategory,
  };