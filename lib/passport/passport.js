let LocalStrategy   = require('passport-local');
let User            = require('../../routes/users/models/User');
let bcrypt          = require('bcryptjs');

module.exports      = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user._id)
    })

    passport.deserializeUser(function (id, done) {
        User.findbyID(id, function (error, user) {
            done(error, user)
        })
    })

    passport.use('local-login',
                new LocalStrategy({
                    usernameField: 'email',
                    passwordField:  'password',
                    passReqToCallback: true,
                }, function (req, email, password, done) {
                    User.findOne({ email: email }, function (error, user) {
                        if (error) return done (error, null)

                        if (!user) {
                            return done(null, false, req.flash('loginMessage', 'User does not exist!'))
                        }
                        
                        bcrypt.compare(password, user.password)
                            .then( (result) => {
                                if (!result) {
                                    return done(null, false, req.flash('loginMessage', 'Check email or password'))
                                } else {
                                    return done(null, user)
                                }
                            })
                            .catch( error => {
                                throw error;
                                
                            })
                    })
                })
    )
}