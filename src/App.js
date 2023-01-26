import pokeball from './assets/pokeball.png';
import Pokemons from './components/PokemonsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-nav'>
        <img className='pokemon-icon' src={pokeball} alt='icon' />
        <p className='title'>Pokedex</p>
      </div>
      <div className='container-body'>
        <Pokemons className="container-grid" />
      </div>
    </div>
  );
}

export default App;
