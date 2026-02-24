import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Halaman (Pages)
import HomePages from "./pages/HomePage";
import Navbar from './components/Navbar';
import DataPage from './pages/DataPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/data" element={<DataPage />} />
      </Routes>
    </Router>
  );
}

export default App
