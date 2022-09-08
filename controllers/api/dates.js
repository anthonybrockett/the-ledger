const Date = require('../../models/date');

module.exports = {
  day,
  forUser,
  show,
  createDay,
  addIncomeToDay,
  addExpenseToDay,
  deleteIncome,
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
  console.log(req.params);
  const date = (await Date.find({id: req.params.id}))
  console.log(date)
  // const income = Date.income.find({id: req.params.id})
  // console.log(income)
  // await Date.findOneAndDelete({ _id: req.params.id });
  // try {
  //   await Date.income.findOneAndDelete({ _id: req.params._id });
  // } catch (err) {
  //   // console.log(err);
  //   res.send(err);
  // }
};