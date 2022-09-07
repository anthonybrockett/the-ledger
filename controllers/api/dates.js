const Date = require('../../models/date');

module.exports = {
  day,
  forUser,
  show,
  createDay,
  addIncomeToDay,
  addExpenseToDay,
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
  console.log(req.params.date, "income")
  let date = new Date(req.params.date);
  console.log(date, "new date");
  const day = await Date.getDay(date);
  await day.addIncomeToDay(req.body);
  res.json(day);
}

// Add an expense item to day
async function addExpenseToDay(req, res) {
  console.log(req.params.id, "expense")
  const day = await Date.getDay(req.user._id);
  await day.addExpenseToDay(req.params.id);
  res.json(day);
}

async function forUser(req, res) {
    const dates = await Date.find({user: req.user._id}).sort('-updatedAt');
    res.json(dates);
}

async function show(req, res) {
  const date = await Date.findById(req.params.id);
  res.json(date);
}
