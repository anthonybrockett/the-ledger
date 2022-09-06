const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const incomeSchema = new Schema({
  amount: { type: Number, required: true, default: 0 },
  notes: { type: String }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});


const dateSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // date: { type: date, required: true },
    income: [incomeSchema],
    // expense: {type: Schema.Types.ObjectId, ref: 'Expense'},
    isSaved: { type: Boolean, default: false }
    }, {
    timestamps: true,
    toJSON: { virtuals: true }
});

dateSchema.statics.getDay = function(userId) {
    // 'this' is bound to the model (don't use an arrow function)
    // return the promise that resolves to a cart (the user's unpaid order)
    return this.findOneAndUpdate(
      // query
      { user: userId, isSaved: false },
      // update - in the case the order (cart) is upserted
      { user: userId },
      // upsert option creates the doc if it doesn't exist!
      { upsert: true, new: true }
    );
  };

  dateSchema.methods.addIncomeToDay = async function(income) {
    const day = this;
    const newIncome = { income };
    day.income.push(income);
    // Return the promise that's returned by the save method
    return day.save();
  };

module.exports = mongoose.model('Date', dateSchema);