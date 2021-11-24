const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// routes
const saucesroutes = require('./routes/sauces');
const userRoutes = require('./routes/user')

// Connection à à la database
mongoose.connect('mongodb+srv://LogAdmin:L%40g%40adm%2Fn@cluster0.2orhz.mongodb.net/Product?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json({
  extended: true
}));
// on encode l'url avec express à la place de body-parser
app.use(express.urlencoded({
  extended: true
}));


app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/sauces', saucesroutes);
app.use('/api/auth', userRoutes)

module.exports = app;