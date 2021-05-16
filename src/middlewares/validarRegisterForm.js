const { body } = require("express-validator");

const validarCreateForm = [
    body("name").notEmpty().withMessage("Debes completar este campo").bail()
    .isLength({min: 5}).withMessage("Debes completar un minimo de 5 caracteres"),
    body("email").notEmpty().withMessage("Debes completar este campo").bail()
    .isEmail().withMessage("Debes colocar un Email válido"),
    body("password").notEmpty().withMessage("Debes completar este campo").bail()
    .isLength({min: 5}).withMessage("Debes completar un minimo de 5 caracteres"),
];

module.exports = validarCreateForm;