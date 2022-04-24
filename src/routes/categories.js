const express = require("express");
const category = require("../../usecases/category")

const router = express.Router();

router.get("/:id", async (req, res,next)=>{
    try{

    const{id}= req.params;
    const categories = await category.getById(id);    
    res.json({success: true,
        payload: categories});
    }catch(error)
    {
        next(error);

    }
})

router.get("/", async (req,res,next)=>{
    try{

        const categories = await category.get();

    
        res.json({success: true,
                  payload: categories});
    
    }catch(error)
    {
        next(error);

    }
   
});

router.post("/", async (req,res,next)=>
{
    try{

        const {name} = req.body;
        const categoryCreated = await category.create(
            {name
        });
    
        res.json({
            success: true,
            message: "Category creada", 
            payload: categoryCreated,
        });

    }catch(error)
    {
        next(error);

    }
    
});

router.put("/:id", async (req,res,next)=>{
    try{

        const{id}= req.params;
        const {name} = req.body;
        const categoryUpdated = await category.update(
            id,
            {name
        });
    
        res.json({
            success: true,
            message: "Category actualizada", 
            payload: categoryUpdated,
        });

    }catch(error)
    {
        next(error);

    }
})

router.patch("/:id",  async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const categoryUpdated = await category.patch(id, { ...req.body });
  
      res.json({
        success: true,
        message: `Category ${id} actualizada`,
        payload: categoryUpdated,
      });
    } catch (error) {
      next(error);
    }
  });
  
  router.delete("/:id",  async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const categoryDeleted = await category.del(id);
  
      res.json({
        success: true,
        message: `Category ${id} eliminada`,
        payload: categoryDeleted,
      });
    } catch (error) {
      next(error);
    }
  });

module.exports = router;