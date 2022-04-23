const express = require("express");

const router = express.Router();

router.get("/:id", (req, res)=>{
    const {id }= req.params;
    res.json({message: `Un user ${id}`})
})

router.get("/", (req,res)=>{

    res.json({message: "Yo soy un user"})

});

router.post("/", (req,res)=>
{
    
    const {name} = req.body;
    res.json({message: "user creado", payload: {name}})
});

router.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {name, price} = req.body;

    res.json({ message: `user ${id} actualizado`, payload: {name}});
})

router.delete("/:id", (req,res)=>
{
    const {id} = req.params;
    const {name, price} = req.body;

    res.json({ message: `user ${id} eliminado`});

});
module.exports = router;