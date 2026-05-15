import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
import Games from './pages/Games';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<StudentDashboard />} />

        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<ClassDetail />} />

        <Route path="/tests" element={<TestsDashboard />} />
        <Route path="/test-taker" element={<PlaceholderPage title="Test Taker" />} />
        <Route path="/quiz-maker" element={<QuizMaker />} />

        <Route path="/checker" element={<Checker />} />
        <Route path="/slides-studio" element={<SlidesStudio />} />

        <Route path="/referral" element={<Referral />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/top-teachers" element={<Teachers />} />

        <Route path="/coins" element={<Coins />} />
        <Route path="/coins/history" element={<PlaceholderPage title="Coin History" />} />
        <Route path="/coins/purchase" element={<PlaceholderPage title="Coin Purchase" />} />
        <Route path="/payment-status/:id" element={<PlaceholderPage title="Payment Status" />} />

        <Route path="/games" element={<Games />} />
        <Route path="/games/arithmetic" element={<PlaceholderPage title="Arithmetic Game" />} />
        <Route path="/games/memory" element={<PlaceholderPage title="Memory Game" />} />
        <Route path="/games/word" element={<PlaceholderPage title="Word Game" />} />
        <Route path="/games/true-false" element={<PlaceholderPage title="True/False Game" />} />

        <Route path="*" element={<PlaceholderPage title="404 - Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
