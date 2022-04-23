const express = require("express");

const router = express.Router();

router.get("/:id", (req, res)=>{
    const {id }= req.params;
    res.json({message: `Una caterogia ${id}`})
})

router.get("/", (req,res)=>{

    res.json({message: "Yo soy un caterogia"})

});

router.post("/", (req,res)=>
{
    
    const {name} = req.body;
    res.json({message: "caterogia creada", payload: {name}})
});

router.put("/:id", (req,res)=>{
    const {id} = req.params;
    const {name, price} = req.body;

    res.json({ message: `caterogia ${id} actualizada`, payload: {name}});
})

router.delete("/:id", (req,res)=>
{
    const {id} = req.params;
    const {name, price} = req.body;

    res.json({ message: `caterogia ${id} eliminada`});

});
module.exports = router;