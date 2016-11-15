var express       = require('express');
var router        = express.Router();
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user').UserModel;

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/register', function(req, res) {
    res.render('register');
});

passport.serializeUser(function(user, callback) {
    console.log(user);
    callback(null, user._id);
});

passport.deserializeUser(function(id, callback) {
   User.getById(id, function(err, user) {
        callback(err, user);
   }); 
});

passport.use(new LocalStrategy(function(username, password, callback) {

    // 1 Buscar el usuario por filtro username
    User.findByUsername(username, function(err, users) {
        if (err) console.log(err);
        if (!users || users.length == 0) {
            console.log('Usuario no encontrado');
            return callback(null, false, {message: 'Usuario no encontrado'});
        }
        //console.log(users[0]);
        // 2 Obtencion del password
        // 3 Comparacion de hashes (password input y el pass user)
        User.comparePassword(password, users[0].password, function(err, isMatch){
            if (err) throw err;
            if (isMatch) {
                console.log('Todo ok con usuario');
                return callback(null, users[0]);
            } else {
                console.log('Clave invalida');
                return callback(null, false, {message: 'Clave invalida'});
            }
        });
    });
}));

router.post('/login', passport.authenticate('local', {
    successRedirect: '/', failureRedirect: '/users/login', failureFlash: true
}), function(req, res) {
    console.log('estoy en el callback');
    req.flash('success_msg', 'usuario no autenticado');
    res.redirect('/');
});

router.post('/register', function(req, res) {

    //console.log('POST REGISTER');
    var name      = req.body.name;
    var username  = req.body.username;
    var email     = req.body.email;
    var password  = req.body.password;
    var password2 = req.body.password2;

    //validaciones
    req.checkBody('name', 'Nombre es requerido').notEmpty();
    req.checkBody('email', 'Email es requerido').notEmpty();
    req.checkBody('email', 'Email es incorrecto').isEmail();
    req.checkBody('password', 'Clave es requerida').notEmpty();
    req.checkBody('password2', 'Las claves no coinciden').equals(req.body.password);

    var errors = req.validationErrors();  
    if (errors) {
        
        res.render('register', {
            errors: errors
        });

    } else {

        User.createUser(name, username, email, password, function(err, user){
            if (err) throw err;
            console.log(user);
        });

        res.redirect('/users/login');
    }

});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/users/login');
});

module.exports = router;