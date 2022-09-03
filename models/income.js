const Schema = require('mongoose').Schema;

const incomeSchema = new Schema({
  date: { type: date, required: true },
  amount: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Income', incomeSchema);