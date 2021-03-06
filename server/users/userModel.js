var Q = require('q');
var mongoose = require('mongoose');
var crypto = require('crypto');

var userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: String,
  salt: String
});


userSchema.pre('save', function (next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  this.hashPassword(this.password);
  console.log(user);
  return next();

});

userSchema.methods.hashPassword = function (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha256').toString('hex');
}

userSchema.methods.validPassword = function (password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64,'sha256').toString('hex');
  return this.password === hash;
};

mongoose.model('User', userSchema);