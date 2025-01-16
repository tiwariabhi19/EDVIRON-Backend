import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TransactionStatus from './components/TransactionStatus';

function App() {
  return (
    <Router>
      <nav className="p-4 bg-blue-500 text-white">
        <Link to="/" className="mr-4">Dashboard</Link>
        <Link to="/status">Check Status</Link>
      </nav>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/status" element={<TransactionStatus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
