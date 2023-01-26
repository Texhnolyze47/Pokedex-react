const Modal = (props) => {   

    return(
        <div className="container-modal">
          {props.pokemon.name &&
            <div className="modal-content" >

              <h1>{props.pokemon.name}</h1>
              <img src={props.pokemon.sprites?.front_default} alt={props.pokemon.name} />
              <p>Type: {props.pokemon.types[0].type.name} </p>
              <button onClick={props.closeModal}>Close</button>
            </div>
          }
      </div>
    )
}

export default Modal;