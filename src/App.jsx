import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Halaman (Pages)
import HomePages from "./pages/HomePage";
import Navbar from './components/Navbar';
import DataPage from './pages/DataPage';
import TambahDataPage from './pages/TambahDataPage';
import DetailDataPage from './pages/DetailDataPage';
import EditDataPage from './pages/EditDataPage';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/detail/:id" element={<DetailDataPage />} />
        <Route path="/edit/:id" element={<EditDataPage />} />
        <Route path="/tambah-data" element={<TambahDataPage/>} />
      </Routes>
    </Router>
  );
}

export default App
