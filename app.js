const express = require('express');
const app = express();
const path = require('path');

// Routes
const mainRouter = require('./routes/main');

// Configuro Template Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

// Configuro Carpeta Public para Imagenes y CSS
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Rutas disponibles
app.use('/', mainRouter);


// Puerto en el que funciona
app.listen(3000,()=>{
    console.log("Funcionando en puerto 3000");
})