const Product = require("../../models/products").model;


const get = async () => {
    //devuelve todos los productos
    return await Product.find({}).exec();
    
}

const getById = async (id) => {
    const product =  await Product.findById(id).populate("categories").exec();
    //devuelve un producto
    return product;
}



const create = async (productData) => {
    const {name, price, description, image, categories} = productData;

    
    const newProduct = new Product({
        name, 
        description, 
        price,
        image,
        categories });

    const savedProduct = await newProduct.save();
    // Logica para guardar en la base de datos
    return savedProduct;
}

const update = async(id, productData) => {
    // actualizar producto
    const {name, description, price, image} = productData;

    const updatedProduct = await Product.findByIdAndUpdate(
        id, 
        {name, 
        description, 
        price, 
        image} ,
        {new: true}
        ).exec();

    return updatedProduct;
}

const patch = async (id, productData) => {
    return await Product.findByIdAndUpdate(
      id,
      { ...productData },
      { new: true }
    ).exec();
  };
  
  const del = async (id) => {
    // Eliminar un producto
    return await Product.findByIdAndDelete(id).exec();
  };

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};

