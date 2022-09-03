const Income = require('../../models/income');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const incomeItems = await Income.find({}).sort('date').exec();
  res.json(incomeItems);
}

async function show(req, res) {
  const incomeItem = await Income.findById(req.params.id);
  res.json(incomeItem);
}