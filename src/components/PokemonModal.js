import './PokemonModal.css'
import './TypeIcon.css'
import InfoModal from './InfoModal.js'
import StatsModal from './StatsModal.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'

const Modal = ({pokemon , closeModal}) => {  
    return(
        <div className="container-modal">
          {pokemon.name &&
            <div className="modal-content" >
              <div className='title-container'>
              <FontAwesomeIcon className='back-button'  onClick={closeModal} icon={icon.faXmark}/>
              <h1 className='modal-title'>{pokemon.name}</h1>
              </div>
              <div className='layout-modal'>
              <InfoModal pokemon={pokemon}/>
              <div>
              <img className='img-margin' src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} />
              </div>
              <StatsModal pokemon={pokemon} />
              </div>
            </div>
          }
      </div>
    )
}

export default Modal;