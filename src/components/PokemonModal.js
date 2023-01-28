import './PokemonModal.css'
import './TypeIcon.css'
import TypeIcon from './TypeIcon.js'
import InfoModal from './InfoModal.js'
import StatsModal from './StatsModal.js'
const Modal = ({pokemon , closeModal}) => {  
   

    return(
        <div className="container-modal">
          {pokemon.name &&
            <div className="modal-content" >
              <h1 className='modal-title'>{pokemon.name}</h1>
              <InfoModal pokemon={pokemon}/>
              <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
              <TypeIcon pokemon={pokemon} />
              <StatsModal pokemon={pokemon} />
              <button onClick={closeModal}>Close</button>
            </div>
          }
      </div>
    )
}

export default Modal;