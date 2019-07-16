let path            = require('path');
let logger          = require('morgan');
let express         = require('express');
let passport        = require('passport');
let mongoose        = require('mongoose');
let createError     = require('http-errors');
let cookieParser    = require('cookie-parser');

let methodOverride  = require('method-override');

let indexRouter     = require('./routes/index');
let usersRouter     = require('./routes/users/users');

let flash           = require('connect-flash');
let session         = require('express-session');
let expressValidator= require('express-validator');

let MongoStore = require('connect-mongo')(session);

// require('dotenv').config();

let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

// app.use(session());

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

// require('./lib/passport/passport')(passport);

// app.use(function(req, res, next) {
// });

// app.use(expressValidator());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
