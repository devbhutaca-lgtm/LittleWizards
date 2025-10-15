import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Science from './pages/Science';
import Finance from './pages/Finance';
import DownloadFlyers from './pages/DownloadFlyers';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/science" element={<Science />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/download-flyers" element={<DownloadFlyers />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;