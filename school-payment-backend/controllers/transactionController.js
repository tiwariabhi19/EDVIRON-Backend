const Transaction = require('../models/Transaction');

// Fetch all transactions
exports.getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch transactions by school
exports.getTransactionsBySchool = async (req, res) => {
  const { school_id } = req.params;
  try {
    const transactions = await Transaction.find({ school_id });
    res.json(transactions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fetch transaction status by custom_order_id
exports.getTransactionStatus = async (req, res) => {
  const { custom_order_id } = req.params;
  try {
    const transaction = await Transaction.findOne({ custom_order_id });
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update transaction status
exports.updateTransactionStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const transaction = await Transaction.findByIdAndUpdate(id, { status }, { new: true });
    if (!transaction) return res.status(404).json({ message: "Transaction not found" });
    res.json(transaction);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
