
require('dotenv').config();

//Ya se tiene creada la instancia del servidor 
const Servidor = require('./models/servidor');

const servidor=new Servidor();

//Lanzar el metodo listen
servidor.listen();