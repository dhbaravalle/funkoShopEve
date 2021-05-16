//REQUIRES//
const express= require('express');
const app = express();
const path = require('path');
const mainRouter=require('./router/mainRouter');
const rutasUsuarios=require('./router/rutasUsuarios');
const rutasProductos=require('./router/rutasProductos');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const port=3000;
//TERMINA REQUIRES//

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, '../public')));

// Nuevos app.use y middlewares
// para POST
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// para PUT y DELETE
app.use(methodOverride('_method'));
// para express-session
app.use(session({
    secret: "Hola",
    resave: false,
    saveUninitialized: false
}));
// para cookies
app.use(cookies());

//RUTAS//
app.use('/', mainRouter);
app.use('/products', rutasProductos)
app.use('/users', rutasUsuarios)

//SERVIDOR EXPRESS//
app.listen(port, () => console.log('Servidor corriendo :)'));