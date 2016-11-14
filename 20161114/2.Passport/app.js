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
ottoman.bucket = cluster.openBucket('default');

var app = express();

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

/*app.use(expressValidator(){

});*/

app.use(flash())

//routes
var routes = require('./routes');
app.use('/', routes);

ottoman.ensureIndices(function(err) {
    if(err) throw err;
    app.listen(8000, function(){
        console.log('Server a la escucha en 8000');
    });
});