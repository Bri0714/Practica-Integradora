import mongoose from "mongoose";

const pokeCollection = 'pokemons'

const pokeSchema = mongoose.Schema({
    id:Number,
    name:String,
    types:[String],
    image:String
})

const pokeModel = mongoose.model(
    pokeCollection,
    pokeSchema
)

export default pokeModel;