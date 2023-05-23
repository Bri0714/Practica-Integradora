import { Router} from "express";
import pokeModel from "../models/pokemon.model.js";

const router = Router();

router.get("/", async (req, res) => {
    //res.send("listando los pokemones");
    const pokemons = await pokeModel.find().lean().exec()
    console.log(pokemons)
    res.render('list', { pokemons })
})

router.get("/:name", (req, res) => {
    const name = req.params.name
    //res.send(`Buscando el pokemon ${name}`);
    res.render('one', {name})
})

router.get("/create" , (req, res) => {
    //res.send("Formulario para crear un pokemon");
    res.render('create' , {})
})

export default router;