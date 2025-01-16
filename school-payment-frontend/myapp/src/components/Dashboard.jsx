import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/transactions')
      .then(response => {
        setTransactions(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Error fetching data ${error}`);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Transactions Dashboard</h1>
      <table className="min-w-full mt-4 table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">Collect ID</th>
            <th className="border px-4 py-2">School ID</th>
            <th className="border px-4 py-2">Gateway</th>
            <th className="border px-4 py-2">Order Amount</th>
            <th className="border px-4 py-2">Transaction Amount</th>
            <th className="border px-4 py-2">Status</th>
            <th className="border px-4 py-2">Custom Order ID</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction._id}>
              <td className="border px-4 py-2">{transaction.collect_id}</td>
              <td className="border px-4 py-2">{transaction.school_id}</td>
              <td className="border px-4 py-2">{transaction.gateway}</td>
              <td className="border px-4 py-2">{transaction.order_amount}</td>
              <td className="border px-4 py-2">{transaction.transaction_amount}</td>
              <td className="border px-4 py-2">{transaction.status}</td>
              <td className="border px-4 py-2">{transaction.custom_order_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>

  );
};

export default Dashboard;
