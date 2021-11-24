const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

// on construit un modéle pour la connexion de l'utilisateur
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);