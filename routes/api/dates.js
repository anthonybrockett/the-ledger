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
// POST /api/dates/day/income/:id
router.post('/day/income/:date', datesCtrl.addIncomeToDay);
// POST /api/dates/day/expense/:id
router.post('/day/expense/:date', datesCtrl.addExpenseToDay);
// DELETE /api/dates/day/expense/:id
router.delete('/day/income/:id', datesCtrl.deleteIncome);

module.exports = router;