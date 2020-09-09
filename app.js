const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

// Routes
const mainRouter = require('./routes/main');

// Configuro Template Engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));

// Configuro Carpeta Public para Imagenes y CSS
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Metodo Put y Delete 
app.use(methodOverride('_method'));

// Cookie
app.use(cookieParser());
// app.use(cookieUser);

// Session
app.use(session({secret : 'dato mata relato'}))

// Rutas disponibles
app.use('/', mainRouter);


// Puerto en el que funciona
app.listen(3000,()=>{
    console.log("Funcionando en puerto 3000");
})