const Date = require('../../models/date');

module.exports = {
  index,
  show,
  createDate,
};

async function forUser(req, res) {
    const dates = await Date.find({user: req.user._id}).sort('-updatedAt');
    res.json(dates);
}

async function show(req, res) {
  const date = await Date.findById(req.params.id);
  res.json(date);
}

async function createDate(req, res) {
    const date = await Date.getDate(req.user._id);
    await date.save();
    res.json(date);
  }