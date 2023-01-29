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
              <div className='layout-modal'>
              <InfoModal pokemon={pokemon}/>
              <div>
              <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
              </div>
              <StatsModal pokemon={pokemon} />
              </div>
              <button onClick={closeModal}>Close</button>
            </div>
          }
      </div>
    )
}

export default Modal;