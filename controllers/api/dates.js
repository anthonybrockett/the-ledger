const Date = require('../../models/date');

module.exports = {
  day,
  forUser,
  show,
  createDay,
};

async function day(req, res) {
  const day = await Date.getDay(req.user._id);
  res.json(day);
}

async function createDay(req, res) {
    const day = await Date.getDay(req.user._id);
    day.isSaved = true;
    await day.save();
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
