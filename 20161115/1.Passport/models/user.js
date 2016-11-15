var ottoman = require('ottoman');
var bcrypt  = require('bcryptjs');

ottoman.bucket = require('../app').bucket;

//UserModel
var UserModel = ottoman.model('User', {

    name     : 'string',
    username : 'string',
    email    : 'string',
    password : 'string'

}, {
    index: {
        findByUsername: {
            by: 'username'
        }
    }
});

UserModel.createUser = function(name, username, email, password, callback) {
    
    var user      = new UserModel();
    user.name     = name;
    user.username = username;
    user.email    = email
    //user.password = password;

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            user.password = hash;
            user.save(function(err){
                if (err) throw err;
                callback(null, user);
            });
        });
    });

}

UserModel.comparePassword = function(candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}

module.exports.UserModel = UserModel;