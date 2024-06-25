// models/Transaction.js
// import mongoose from 'mongoose';

// const TransactionSchema = new mongoose.Schema({
//   description: {
//     type: String,
//     required: true,
//   },
//   amount: {
//     type: Number,
//     required: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// export default mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);


const transactionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    ref: 'User',
    unique: true // Ensure email is unique for each user
  },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
});

export default mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);



