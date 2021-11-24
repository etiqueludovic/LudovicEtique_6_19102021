const http = require('http');
const app = require('./app');

// Création du serveur
const server = http.createServer(app);

// Vérifie le port d'écoute
const port = '3000';
app.set('port', port);

// Ecoute du port
server.listen(port);
