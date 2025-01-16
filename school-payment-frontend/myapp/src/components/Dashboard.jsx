import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('https://edviron-backend-l8n8.onrender.com/transactions');
        setTransactions(response.data);
      } catch (err) {
        setError(`Error fetching transactions: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transactions Dashboard</h1>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Collect ID</th>
            <th className="px-4 py-2 text-left">School ID</th>
            <th className="px-4 py-2 text-left">Gateway</th>
            <th className="px-4 py-2 text-left">Order Amount</th>
            <th className="px-4 py-2 text-left">Transaction Amount</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Custom Order ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{transaction.collect_id}</td>
                <td className="px-4 py-2 border">{transaction.school_id}</td>
                <td className="px-4 py-2 border">{transaction.gateway}</td>
                <td className="px-4 py-2 border">{transaction.order_amount}</td>
                <td className="px-4 py-2 border">{transaction.transaction_amount}</td>
                <td className="px-4 py-2 border">{transaction.status}</td>
                <td className="px-4 py-2 border">{transaction.custom_order_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center px-4 py-2">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
