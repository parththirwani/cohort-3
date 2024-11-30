import React, { lazy, Suspense } from 'react'; // Import lazy and Suspense from React
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

const Dashboard = lazy(() => import('./components/Dashboard'));
const Landing = lazy(() => import('./components/Landing'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/')}>LANDING BUTTON</button>
      <button onClick={() => navigate('/dashboard')}>Dashboard BUTTON</button>
    </div>
  );
}

export default App;
