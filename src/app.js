import express from "express";
import pokemonRouter from './routes/pokemon.routes.js'
import handlebars from 'express-handlebars'
import mongoose from "mongoose";

const uri = 'mongodb+srv://bamezquitap:parada2021@cluster0.u7xao80.mongodb.net/pokedex'

const app = express();

//configuracion de handlebars

app.engine('handlebars', handlebars.engine())
app.set('views', './src/views')
app.set('view engine', 'handlebars')

//ruta para ver el logo
app.use(express.static('./src/public'))

//ruta para ver los pokemones
app.use('/pokemon', pokemonRouter)

app.get("/", (req, res) => {
    res.send("Hello World");
});

mongoose.set('strictQuery', false)
try {
    await mongoose.connect(uri)
    console.log('Conectado a la base de datos')
    app.listen(8080, () => {
        console.log("Server is running on port 8080");
    });
} catch (e) {
    console.log('Error al conectar a la base de datos')
}

//app.listen(8080, () => {
//    console.log("Server is running on port 8080");
//});



