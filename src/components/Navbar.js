import pokeball from '../assets/pokeball.png';
import './Navbar.css'
const Navbar = () => {

    return(
        <div className='container-nav'>
        <img className='pokemon-icon' src={pokeball} alt='icon' />
        <p className='title'>Pokedex</p>
      </div>
    )

}
export default Navbar