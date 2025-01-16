import { useState } from 'react';
import axios from 'axios';

const TransactionStatus = () => {
  const [customOrderId, setCustomOrderId] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckStatus = () => {
    setLoading(true);
    setError('');
    axios.get(`http://localhost:5000/transactions/status/${customOrderId}`)
      .then(response => {
        setStatus(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Error fetching data ${error}`);
        setLoading(false);
      });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Check Transaction Status</h1>
      <input
        type="text"
        placeholder="Enter Custom Order ID"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
        className="border p-2 mt-4"
      />
      <button
        onClick={handleCheckStatus}
        className="bg-blue-500 text-white p-2 mt-2"
      >
        Check Status
      </button>
      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {status && <p className="mt-4">Status: {JSON.stringify(status)}</p>}
    </div>
  );
};

export default TransactionStatus;
