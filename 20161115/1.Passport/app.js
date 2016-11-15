var path = require('path');

//validacion
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

//express
var expressValidator = require('express-validator');
var session          = require('express-session');
var express          = require('express');
var exphbs           = require('express-handlebars');
var bodyParser       = require('body-parser');
var cookieParser     = require('cookie-parser');
var flash            = require('connect-flash');

//base de datos y ottoman
var couchbase  = require('couchbase');
var cluster    = new couchbase.Cluster('couchbase://127.0.0.1');
var ottoman    = require('ottoman');
var bucket     = cluster.openBucket('default');
ottoman.bucket = bucket;

module.exports.bucket = bucket;

var app = express();

// statics mappings
app.use(express.static(path.join(__dirname, 'public')));

//sistema de templating
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

//uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;
 
    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(flash());

app.use(function(req, res, next) {
    res.locals.error       = req.flash('error');
    res.locals.user        = req.user || null;
    next();
});

//routes
var routes = require('./routes');
app.use('/', routes);

var users = require('./routes/users');
app.use('/users', users);

ottoman.ensureIndices(function(err) {
    if(err) throw err;
    app.listen(8000, function(){
        console.log('Server a la escucha en 8000');
    });
});