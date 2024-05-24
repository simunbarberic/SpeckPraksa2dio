const express = require('express');
const router = express.Router();
const {Pokemon} = require('../models');

router.get('/', async(req, res)=>{
    try{
        const listOfPokemons = await Pokemon.findAll();
        res.json(listOfPokemons);
    }catch(error){
        res.send(error);
    }
})

router.post('/addNewPokemon', async (req,res)=>{
    try{
        const pokemon = req.body;
        await Pokemon.create(pokemon);
        res.json(pokemon);
    }catch(error){
        res.send(error);
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const id = req.params.id;
        const pokemon = await Pokemon.findByPk(id);
        res.json(pokemon);
    }catch(error){
        res.send(error);
    }
})

router.delete('/deletePokemon/:id', async(req,res)=>{
    try{
        const pokemonid = req.params.id;
        const pokemon = await Pokemon.destroy({where: {id: pokemonid}});
        res.json(pokemon);
    }catch(error){
        res.send(error);
    }
})


router.put('/updatePokemon/:id', async(req, res)=>{
    try{
        const pokemonid = req.params.id;
        const updateData = req.body;
        const pokemon = await Pokemon.update(updateData, {where: {id: pokemonid}});
        res.send(pokemon);
    }catch(error){
        res.send(error);
    }
});

module.exports = router;