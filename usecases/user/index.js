const User = require("../../models/users").model;


const get = async () => {
    //devuelve todos los usuarios
    return await User.find({}).exec();
    
}

const getById = async (id) => {
    return await User.findById(id).exec();
    //devuelve un usuario
}


const create = async (userData) => {
    const {firstname,lastname,email,password} = userData;
    const newUser = new User({
        firstname,lastname,email,password });

    const savedUser = await newUser.save();
    // Logica para guardar en la base de datos
    return savedUser;
}

const update = async(id, userData) => {
    // actualizar usuario
    const {firstname,lastname,email,password} = userData;

    const updatedUser = await User.findByIdAndUpdate(
        id, 
        {firstname,lastname,email,password} ,
        {new: true}
        ).exec();

    return updatedUser;
}

const patch = async (id, userData) => {
    return await User.findByIdAndUpdate(
      id,
      { ...userData },
      { new: true }
    ).exec();
  };
  
  const del = async (id) => {
    // Eliminar un usuario
    return await User.findByIdAndDelete(id).exec();
  };

module.exports = {
    get,
    getById,
    create,
    update,
    del,
    patch,
};
