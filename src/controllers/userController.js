// REQUIRES
const fs = require("fs");
const { validationResult } = require("express-validator");
const path = require("path");
const bcrypt = require("bcryptjs");
const db= require(".././database/models")
const Users = require(".././database/models/Users.js");

// Acceso a database
const usersDataBase = path.join(__dirname, "../data/users.json");



// Controlador usuarios
const userController = {
    // GET de login
    login: function(req, res){
        res.render('./users/login');
    },
    // Get de register
    register: function(req, res){
        res.render('./users/register');
    },
    profile: function(req, res){
        res.render('./users/profile')},

        
    // POST de login
    loginProcess: function (req,res){
        let errores = validationResult(req);
        if(errores.isEmpty()){
            // Comprobar si hay un email registrado
            let userToLogin = User.findByField("email", req.body.email);
            // Logear
            if(userToLogin) {
                //comparar password
                let okPassword = bcrypt.compareSync(req.body.password, userToLogin.password)
                if(okPassword){
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    // guardar cookie
                    if (req.body.recordar) {
                        res.cookie("rememberUser", req.body.email, { maxAge: 60000 })
                    }
                    
                    return res.redirect("./users/profile");
                }
                return res.render('./users/login',{
                    errores: {
                        email: {
                            msg: "Credenciales inválidas!",
                        }
                    },
                    old: req.body
                })
            }
            // verificar si el email esté en uso
            return res.render('./users/login',{
                errores: {
                    email: {
                        msg: "Este email no está en uso",
                    }
                },
                old: req.body
            });
        }
        else {
            return res.render('./users/login', {
                errores: errores.mapped(),
                old: req.body
            })
        }
    },

    // POST de register
    create: function (req,res){
    let errores = validationResult(req);
    // si hay errores, mostrarlos en texto
    if(!errores.isEmpty()){
        return res.render('./users/register', {
            errores: errores.mapped(),
            old: req.body
        });
    }
    // comprobar si el email está en uso
    let userOnDB = db.Users.findOne({
        where:{
            user_email: (req.body.email)
        }
    }).then(function(usuario){
            return usuario
        })
        
    if(userOnDB!=undefined) {
        return res.render('./users/register', {
            errores: {
                email: {
                    msg: "Este e-mail ya está en uso."
                }
            },
            old: req.body
        })
    }
    // Crear usuario en la data
    let userToCreate = db.Users.create({
        user_name: "req.body.name",
        user_email:"req.body.email",
        // encriptar password
        password: "bcrypt.hashSync(req.body.password, 10)"
    })
    return res.redirect("./users/login")
}

}

module.exports = userController;