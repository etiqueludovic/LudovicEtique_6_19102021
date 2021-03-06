const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/User');
// on route les données utilisateurs
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;