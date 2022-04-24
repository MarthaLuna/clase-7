const Category = require("../../models/categories").model;


const get = async () => {
    //devuelve todos los categorias
    return await Category.find({}).exec();
    
}

const getById = async (id) => {
    return await Category.findById(id).exec();
    //devuelve un categoria
}


const create = async (categoryData) => {
    const {name} = categoryData;
    const newCategory = new Category({
        name });

    const savedCategory = await newCategory.save();
    // Logica para guardar en la base de datos
    return savedCategory;
}

const update = async(id, categoryData) => {
    // actualizar categoria
    const {name} = categoryData;

    const updatedCategory = await Category.findByIdAndUpdate(
        id, 
        {name} ,
        {new: true}
        ).exec();

    return updatedCategory;
}

const patch = async (id, categoryData) => {
    return await Category.findByIdAndUpdate(
      id,
      { ...categoryData },
      { new: true }
    ).exec();
  };
  
  const del = async (id) => {
    // Eliminar un categoria
    return await Category.findByIdAndDelete(id).exec();
  };

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};
