const express = require('express');
const router = express.Router();

const shoeController = require('../app/controllers/ShoeController');

router.get('/create', shoeController.create);
router.post('/store', shoeController.store);
router.get('/:id/edit', shoeController.edit);
router.post('/:handle-form-actions', shoeController.handleFormAction);
router.put('/:id', shoeController.update);
router.patch('/:id/restore', shoeController.restore);
router.delete('/:id', shoeController.destroy);
router.delete('/:id/force', shoeController.forceDestroy);
router.get('/:slug', shoeController.show);

module.exports = router;
