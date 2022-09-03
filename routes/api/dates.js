const express = require('express');
const router = express.Router();
const datesCtrl = require('../../controllers/api/dates');

// GET /api/items
router.get('/user', datesCtrl.forUser);
// GET /api/items/:id
router.get('/:id', datesCtrl.show);
// POST /api/dates
router.post('/', datesCtrl.createDate);

module.exports = router;