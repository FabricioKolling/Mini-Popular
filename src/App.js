import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/NavbarMenu.js'
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Produtos from './Pages/Produtos';
import Contato from './Pages/Contato';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;