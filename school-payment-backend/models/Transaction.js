const mongoose = require('mongoose');

// Define the schema
const TransactionSchema = new mongoose.Schema({
  collect_id: { type: String, required: true },
  school_id: { type: String, required: true },
  gateway: { type: String, required: true },
  order_amount: { type: Number, required: true },
  transaction_amount: { type: Number, required: true },
  status: { type: String, required: true },
  custom_order_id: { type: String, required: true },
});

// Export the model
module.exports = mongoose.model('Transaction', TransactionSchema);
