///import dependecies
const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/all-pokemon', async (req, res) => {
    try{
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=200')
        const pokemon = response.data

        res.status(200).send({
            message: 'pokemon found',
            data: pokemon.results,
        })
    } catch (e){
        res.status(500).send({
            message: ' could not fetch data',
            data: e,
        })
    }
})
// gets one pokemon specfic
router.get('/:name', async (req, res) => {
    const pokemonName = req.params.name
    
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        const data = response.data 

        res.status(200).send({
            message: 'image found',
            payload: data.sprites.front_default
        })
    } catch(e) {
        res.status(500).send({
            message: `could not fetch data`,
            data: e,
        })
    }

})


module.exports = router;
