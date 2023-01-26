import React from "react";
import Modal from "./Modal.js";
import axios from "axios";
import { useEffect, useState } from "react";

const PokemonsList = () => {
	const [pokemons, setPokemons] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [selectedPokemon, setSelectedPokemon] = useState({})


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
		<div>
			<div>
				<div className="container-grid">
				{pokemonDetails.map((pokemonDetail) => (
					<div key={pokemonDetail.name} onClick={() => handleClick(pokemonDetail)} >
						<h2 className="grid-item">{pokemonDetail.name}</h2>
                        <img className="grid-item" src={pokemonDetail.sprites.front_default} alt="pokemon"/>
					</div>
				))}
			</div>
			{ modalIsOpen &&
				<Modal pokemon={selectedPokemon} closeModal={() => setModalIsOpen(false)} />
			}
			</div>
		</div>
	);
};

export default PokemonsList;