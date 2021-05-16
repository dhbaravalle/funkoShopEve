const { body } = require("express-validator");

const validarLoginForm = [
    body("email")
        .notEmpty().withMessage("Debes escribir tu nombre de usuario aqui").bail()
        .isLength({min:5}).withMessage("Debe contener un mínimo de 5 caracteres"),
    body("password")
        .notEmpty().withMessage("Debes escribir tu contraseña").bail()
        .isLength({min:5}).withMessage("Debe contener un mínimo de 5 caracteres"),
];

module.exports = validarLoginForm;