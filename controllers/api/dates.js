const Date = require('../../models/date');

module.exports = {
  day,
  forUser,
  show,
  createDay,
  addIncomeToDay,
  addExpenseToDay,
  deleteIncome,
  deleteExpense,
};

async function day(req, res) {
  const day = await Date.getDay(req.user._id);
  res.json(day);
}

async function createDay(req, res) {
    console.log(req.body)
    const day = await Date.getDay({
      user: req.user._id,
      date: req.body.selectedDate,
    });
    day.isSaved = true;
    await day.save();
    res.json(day);
}

// Add an income item to day
async function addIncomeToDay(req, res) {
  let date = req.params.date;
  const day = await Date.getDay(req.user._id, date);
  await day.addIncomeToDay(req.body);
  res.json(day);
}

// Add an expense item to day
async function addExpenseToDay(req, res) {
  let date = req.params.date;
  const day = await Date.getDay(req.user._id, date);
  await day.addExpenseToDay(req.body);
  res.json(day);
}

async function forUser(req, res) {
    const dates = await Date.find({user: req.user._id}).sort('-updatedAt');
    res.json(dates);
}

async function show(req, res) {
  const date = await Date.findById(req.params.date);
  res.json(date);
}

async function deleteIncome(req, res) {
  const dateId = req.body.id

  const date = await Date.findOneAndUpdate(
    {_id: dateId},
    {$pull:
      {
        income: { _id: req.params.id}
      }
    });
};

async function deleteExpense(req, res) {
  const dateId = req.body.id

  const date = await Date.findOneAndUpdate(
    {_id: dateId},
    {$pull:
      {
        expense: { _id: req.params.id}
      }
    });
};