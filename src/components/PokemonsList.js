import React from "react";
import Modal from "./PokemonModal.js";
import axios from "axios";

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard.js";

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
			<div className="container-grid">
				{pokemonDetails.map((pokemon) => (
					<PokemonCard key={pokemon.name} pokemon={pokemon} onClick={() => handleClick(pokemon)} />
				))}

			{ modalIsOpen &&
				<Modal pokemon={selectedPokemon} closeModal={() => setModalIsOpen(false)} />
			}
			</div>
	);
};

export default PokemonsList;