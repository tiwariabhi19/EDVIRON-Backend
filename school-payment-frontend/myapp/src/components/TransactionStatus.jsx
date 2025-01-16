import { useState } from 'react';
import axios from 'axios';

const TransactionStatus = () => {
  const [customOrderId, setCustomOrderId] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckStatus = async () => {
    if (!customOrderId.trim()) {
      setError('Please enter a valid Custom Order ID');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const response = await axios.get(`http://localhost:4000/transactions/status/${customOrderId}`);
      setStatus(response.data);
    } catch (err) {
      setError(`Error fetching status: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Check Transaction Status</h1>
      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Custom Order ID"
          value={customOrderId}
          onChange={(e) => setCustomOrderId(e.target.value)}
          className="border p-2 mb-4 w-1/2"
        />
        <button
          onClick={handleCheckStatus}
          className="bg-blue-500 text-white p-2 rounded w-1/2"
        >
          Check Status
        </button>
        {loading && <p className="mt-4 text-blue-500">Loading...</p>}
        {error && <p className="mt-4 text-red-500">{error}</p>}
        {status && (
          <div className="mt-4">
            <h2 className="font-semibold">Transaction Status:</h2>
            <pre className="bg-gray-100 p-4">{JSON.stringify(status, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionStatus;
