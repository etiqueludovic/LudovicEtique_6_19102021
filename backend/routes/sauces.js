const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const SauceCtrl = require('../controllers/sauces');

// route de la récupération, modification et suppression des données des sauces
router.get('/', auth, multer, SauceCtrl.getAllSauce);
router.post('/', auth, multer, SauceCtrl.createSauce);
router.get('/:id', auth, multer, SauceCtrl.getOneSauce);
router.put('/:id', auth, multer, SauceCtrl.modifySauce);
router.delete('/:id', auth, SauceCtrl.deleteSauce);
router.post('/:id/like', auth, SauceCtrl.likeDislike);

module.exports = router;