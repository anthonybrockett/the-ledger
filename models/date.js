const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const dateSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    // date: { type: date, required: true },
    income: {type: Schema.Types.ObjectId, ref: 'Income'},
    // expense: {type: Schema.Types.ObjectId, ref: 'Expense'},
    isSaved: { type: Boolean, default: false }
    }, {
    timestamps: true
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

module.exports = mongoose.model('Date', dateSchema);