import './PokemonModal.css'
const Modal = ({pokemon , closeModal}) => {   

    return(
        <div className="container-modal">
          {pokemon.name &&
            <div className="modal-content" >

              <h1>{pokemon.name}</h1>
              <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
              <p>Type: {pokemon.types[0].type.name} </p>
              <button onClick={closeModal}>Close</button>
            </div>
          }
      </div>
    )
}

export default Modal;