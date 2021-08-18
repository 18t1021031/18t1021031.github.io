const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/shoes', meController.storedShoes);
router.get('/trash/shoes', meController.trashShoes);

module.exports = router;
