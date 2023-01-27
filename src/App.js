import pokeball from './assets/pokeball.png';
import PokemonsList from './components/PokemonsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container-nav'>
        <img className='pokemon-icon' src={pokeball} alt='icon' />
        <p className='title'>Pokedex</p>
      </div>
      <div className='container-body'>
        <PokemonsList />
      </div>
    </div>
  );
}

export default App;
