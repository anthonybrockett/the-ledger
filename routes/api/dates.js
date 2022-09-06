const express = require('express');
const router = express.Router();
const datesCtrl = require('../../controllers/api/dates');

// GET /api/items
router.get('/user', datesCtrl.forUser);
// GET /api/items/:id
router.get('/:id', datesCtrl.show);
// GET /api/dates/day
router.get('/day', datesCtrl.day);
// POST /api/dates
router.post('/day/createDay', datesCtrl.createDay);

module.exports = router;