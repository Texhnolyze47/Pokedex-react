import React from "react";
import Modal from "./Modal.js";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf,faFire, faWater,faIcicles,faBolt, faFlask} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";

const PokemonsList = () => {
	const [pokemons, setPokemons] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [selectedPokemon, setSelectedPokemon] = useState({})

	const typeIcons = {
		"grass": <FontAwesomeIcon icon={faLeaf}/>,
		"fire": <FontAwesomeIcon  icon={faFire}/>,
		"water": <FontAwesomeIcon icon={faWater}/>,
		"ice": <FontAwesomeIcon icon={faIcicles}/>,
		"electric": <FontAwesomeIcon icon={faBolt}/>,
		"poison": <FontAwesomeIcon icon={faFlask}/>
	}

	useEffect(() => {
		axios
			.get("https://pokeapi.co/api/v2/pokemon?limit=10")
			.then((response) => {
				setPokemons(response.data.results);
				const pokemonPromises = response.data.results.map((pokemon) =>
					axios.get(pokemon.url),
				);
				axios
					.all(pokemonPromises)
					.then(
						axios.spread((...responses) => {
							const pokemonData = responses.map((response) => response.data);
							setPokemonDetails(pokemonData);
						}),
					)
					.catch((error) => console.error(error));
			})
			.catch((error) => console.error(error));
	}, []);

	const handleClick = (pokemon) =>{
		setSelectedPokemon(pokemon)
		setModalIsOpen(true)
	}

	return (
				<div className="container-grid">
				{pokemonDetails.map((pokemonDetail) => (
					<div className="list-item" key={pokemonDetail.name} onClick={() => handleClick(pokemonDetail)}>
						<div className="id-item">{`#${pokemonDetail.id.toString().padStart(3,"0")}`}</div>
                        <img className="img-item" src={pokemonDetail.sprites.front_default} alt="pokemon"/>
						<h2 className="text-item">{pokemonDetail.name}</h2>
						<div className="types">
							{pokemonDetail.types.map((types, i) => {
								if(typeIcons[types.type.name]){
									return <p className={types.type.name} key={i}>{typeIcons[types.type.name]}</p>
								} else{
									return <p key={i}>Tipo desconocido</p>

								}
							})}
						</div>
			
					</div>
				))}
			{ modalIsOpen &&
				<Modal pokemon={selectedPokemon} closeModal={() => setModalIsOpen(false)} />
			}
			</div>
	);
};

export default PokemonsList;