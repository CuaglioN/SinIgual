import react from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import IManualidades from './Pages/IManualidades/IManualidades';
import IScrapBooking from './Pages/IScrapBooking/IScrapBooking';
import Productos from './Pages/Productos/Productos';
import Contacto from './Pages/Contacto/Contacto';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/IManualidades" element={<IManualidades />} />
          <Route exact path="/IScrapBooking" element={<IScrapBooking />} />
          <Route exact path="/Productos" element={<Productos />} />
          <Route exact path="/Contacto" element={<Contacto />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
