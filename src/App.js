import PokemonsList from './components/PokemonsList.js';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container-body'>
        <PokemonsList />
      </div>
    </div>
  );
}

export default App;
