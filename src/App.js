const express = require('express');
const Config = require('./Config');
const UserRoutes = require('./Routes/Users.routes')

const app = express();

// settings
app.set('port', Config.port);

// middlewares
app.use(express.json()); // Para que resiva datos en formato json
app.use(express.urlencoded({extended: false})); // para que resiva datos que llegan desde formularios html

// routers
app.use(UserRoutes.router);

module.exports.app = app;