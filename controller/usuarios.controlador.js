//Desestructuracion del response
const { response } = require('express');
//Importar el paquete para encriptacion
const bcryptjs=require('bcryptjs');
//Importar el modelo
const Usuario = require('../models/usuario');


const usuariosGet = (req, res = response) => {
    //res.send('SERVIDOR REST');
    res.json({
        mensaje: 'GET API CONTROLADOR'
    });
}

const usuariosPut = (req, res) => {
    res.json({
        mensaje: 'PUT API CONTROLADOR'
    });
}
const usuariosPost = async (req, res=response) => {

    
    //Separar los campos que se van a enviar 
    const {nombre,correo,password, rol} = req.body;
    //Validar si el correo existe,findOne realiza la busqueda
    const existeCorreo=await Usuario.findOne({correo});
    if(existeCorreo){
        //retornar un estado de error para este ejemplo es el 400
        return res.status(400).json({
            mensaje:'EL CORREO ESTA REGISTRADO'
        });
    }
    //Creamos la instancia 
    const usuario = new Usuario({nombre,correo,password, rol});
    //encriptar la contraseña, en la documentacion revisar un salt es el numero de vueltas
    const salt=bcryptjs.genSaltSync();
    usuario.password=bcryptjs.hashSync(password,salt);
    //Grabar el registro
    await usuario.save();
    res.json({
        mensaje: 'POST API CONTROLADOR',
        usuario
    });
}
const usuariosDelete = (req, res) => {
    res.json({
        mensaje: 'DELETE API CONTROLADOR'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}