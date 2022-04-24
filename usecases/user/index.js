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
    const {name} = userData;
    const newUser = new User({
        name });

    const savedUser = await newUser.save();
    // Logica para guardar en la base de datos
    return savedUser;
}

const update = async(id, userData) => {
    // actualizar usuario
    const {name} = userData;

    const updatedUser = await User.findByIdAndUpdate(
        id, 
        {name} ,
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
