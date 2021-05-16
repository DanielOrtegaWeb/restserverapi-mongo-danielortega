
const { validationResult } = require('express-validator');

//next es una fucion que se llama cuando el middleware se procesa
const validarCampos =(req,res,next)=>{
    
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}

module.exports={
    validarCampos
}