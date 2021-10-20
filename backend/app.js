const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const stuffroutes = require('./routes/stuff');
const userRoutes = require('./routes/user')

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

app.use(bodyParser.json());

app.use('/api/stuff', stuffroutes);
app.use('/api/auth', userRoutes)

module.exports = app;