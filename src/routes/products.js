const express = require("express");
const product = require("../../usecases/product");
const { authHandler } = require("../middlewares/authHandlers");
const {
  adminHandler,
  staffHandler,
} = require("../middlewares/permissionHandlers");

const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const products = await product.getById(id);    
    res.json({success: true,
        payload: products});
    }catch(error)
    {
        next(error);

    }
})

router.get("/", authHandler, staffHandler, async (req,res,next)=>{
    try{

        const products = await product.get();

    
        res.json({success: true,
                  payload: products});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/", authHandler,  adminHandler, async (req,res,next)=>
{
    try{

        const {name, description, price, image, categories} = req.body;
        const productCreated = await product.create(
            {name, 
            description, 
            price, 
            image,
            categories
        });
    
        res.json({
            success: true,
            message: "Producto creado", 
            payload: productCreated,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id", authHandler, adminHandler, async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {name, description, price, image} = req.body;
        const productUpdated = await product.update(
            id,
            {name, 
            description, 
            price, 
            image
        });
    
        res.json({
            success: true,
            message: "Producto actualizado", 
            payload: productUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id",  authHandler, adminHandler, async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const productUpdated = await product.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `Producto ${id} actualizado`,
        payload: productUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id",  authHandler, adminHandler, async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const productDeleted = await product.del(id);
  
      res.json({
        success: true,
        message: `Producto ${id} eliminado`,
        payload: productDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;