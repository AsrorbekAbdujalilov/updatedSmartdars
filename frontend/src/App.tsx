import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';

const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
    <p className="text-gray-600 mb-8">This page is under construction.</p>
    <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
  </div>
);

import Home from './pages/Home';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import Classes from './pages/Classes';
import ClassDetail from './pages/ClassDetail';
import TestsDashboard from './pages/TestsDashboard';
import QuizMaker from './pages/QuizMaker';
import Checker from './pages/Checker';
import SlidesStudio from './pages/SlidesStudio';
import Referral from './pages/Referral';
import Settings from './pages/Settings';
import Teachers from './pages/Teachers';
import Coins from './pages/Coins';
import CoinHistory from './pages/CoinHistory';
import CoinPurchase from './pages/CoinPurchase';
import PaymentStatus from './pages/PaymentStatus';
import Games from './pages/Games';
import Arithmetic from './pages/Arithmetic';
import MemoryGame from './pages/MemoryGame';
import TrueFalseGame from './pages/TrueFalseGame';
import WordGame from './pages/WordGame';
import TestTaker from './pages/TestTaker';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Layout><StudentDashboard /></Layout></ProtectedRoute>} />
        <Route path="/classes" element={<ProtectedRoute><Layout><Classes /></Layout></ProtectedRoute>} />
        <Route path="/classes/:id" element={<ProtectedRoute><Layout><ClassDetail /></Layout></ProtectedRoute>} />
        <Route path="/tests" element={<ProtectedRoute><Layout><TestsDashboard /></Layout></ProtectedRoute>} />
        <Route path="/test-taker" element={<ProtectedRoute><Layout><PlaceholderPage title="Test Taker" /></Layout></ProtectedRoute>} />
        <Route path="/quiz-maker" element={<ProtectedRoute><Layout><QuizMaker /></Layout></ProtectedRoute>} />
        <Route path="/checker" element={<ProtectedRoute><Layout><Checker /></Layout></ProtectedRoute>} />
        <Route path="/slides-studio" element={<ProtectedRoute><Layout><SlidesStudio /></Layout></ProtectedRoute>} />
        <Route path="/referral" element={<ProtectedRoute><Layout><Referral /></Layout></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Layout><Settings /></Layout></ProtectedRoute>} />
        <Route path="/top-teachers" element={<ProtectedRoute><Layout><Teachers /></Layout></ProtectedRoute>} />
        <Route path="/coins" element={<ProtectedRoute><Layout><Coins /></Layout></ProtectedRoute>} />
        <Route path="/coins/history" element={<ProtectedRoute><Layout><CoinHistory /></Layout></ProtectedRoute>} />
        <Route path="/coins/purchase" element={<ProtectedRoute><Layout><CoinPurchase /></Layout></ProtectedRoute>} />
        <Route path="/payment-status/:id" element={<ProtectedRoute><Layout><PaymentStatus /></Layout></ProtectedRoute>} />
        <Route path="/games" element={<ProtectedRoute><Layout><Games /></Layout></ProtectedRoute>} />
        <Route path="/games/arithmetic" element={<ProtectedRoute><Layout><Arithmetic /></Layout></ProtectedRoute>} />
        <Route path="/games/memory" element={<ProtectedRoute><Layout><MemoryGame /></Layout></ProtectedRoute>} />
        <Route path="/games/true-false" element={<ProtectedRoute><Layout><TrueFalseGame /></Layout></ProtectedRoute>} />
        <Route path="/games/word" element={<ProtectedRoute><Layout><WordGame /></Layout></ProtectedRoute>} />
        <Route path="/quiz/:id" element={<ProtectedRoute><Layout><TestTaker /></Layout></ProtectedRoute>} />

        <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
