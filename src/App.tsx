import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrainingPage from './pages/TrainingPage';
import PublicationsPage from './pages/PublicationsPage'; // Import the new page

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trainings" element={<TrainingPage />} />
      <Route path="/publications" element={<PublicationsPage />} /> {/* Add Route */}
    </Routes>
  );
}

export default App;