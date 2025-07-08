import NavbarMenu from './Pages/NavbarMenu';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarMenu/>
      {/* NOVO: Container para o resto do conteúdo da sua página */}
      <main className="main-content">
        {/*
          Aqui virá o resto do seu site:
          - Banners
          - Seção de produtos
          - Rodapé
          - etc.
        */}
        <h1>Conteúdo da Página Começa Aqui</h1>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;