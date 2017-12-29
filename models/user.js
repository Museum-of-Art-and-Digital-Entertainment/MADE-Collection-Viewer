const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
});

module.exports = mongoose.model('User', userSchema);
