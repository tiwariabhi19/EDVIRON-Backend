const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

// Get all transactions
router.get('/', transactionController.getAllTransactions);

// Get transactions by school
router.get('/:school_id', transactionController.getTransactionsBySchool);

// Get transaction status by custom_order_id
router.get('/status/:custom_order_id', transactionController.getTransactionStatus);

// Update transaction status
router.post('/status/:id', transactionController.updateTransactionStatus);

module.exports = router;
