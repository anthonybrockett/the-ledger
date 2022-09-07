const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  amount: { type: Number, required: true, default: 0 },
  notes: { type: String, required: false, default: "" },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

const expenseSchema = new Schema({
  amount: { type: Number, required: true, default: 0 },
  notes: { type: String, required: false },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});


const dateSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: { type: Date, required: false },
    income: [incomeSchema],
    expense: [expenseSchema],
    isSaved: { type: Boolean, default: false }
    }, {
    timestamps: true,
    toJSON: { virtuals: true }
});

dateSchema.statics.getDay = function(userId, selectedDate) {
  // 'this' is bound to the model (don't use an arrow function)
  // return the promise that resolves to a day (the user's unsaved day)
  return this.findOneAndUpdate(
    // query
    { user: userId, isSaved: false },
    // update - in the case the day is upserted
    { date: selectedDate },
    // upsert option creates the doc if it doesn't exist!
    { upsert: true, new: true }
  );
};

dateSchema.methods.addIncomeToDay = async function(income) {
  const day = this;
  const newIncome = { income };
  day.income.push(newIncome);
  // Return the promise that's returned by the save method
  return day.save();
};

dateSchema.methods.addExpenseToDay = async function(expense) {
  const day = this;
  const newExpense = { expense };
  day.expense.push(newExpense);
  // Return the promise that's returned by the save method
  return day.save();
};

module.exports = mongoose.model('Date', dateSchema);