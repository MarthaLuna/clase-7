const User = require("../../models/users").model;
const encrypt = require("../../src/lib/encrypt")


const get = async () => {
    //devuelve todos los usuarios
    return await User.find({}).exec();
    
}

const getById = async (id) => {
    return await User.findById(id).exec();
    //devuelve un usuario
}

//getuserbyemail
const getByEmail = async (email) => {
    return await User.findOne({email}).exec();
    
    
}

const authenticate = async(user, password) => {
    hash = user.password;
    return await encrypt.verifyPassword(password, hash);
}

//compare password
const create = async (userData) => {
    
    const {firstname,lastname,email,password} = userData;

    const hash = await encrypt.hashPassword(password);
    const newUser = new User({
        firstname,lastname,email,password:hash });

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
    getByEmail,
    authenticate,
};
