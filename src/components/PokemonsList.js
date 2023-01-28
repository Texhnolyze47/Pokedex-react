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

	const fetchData = async () => {
		try{
			const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
			setPokemons(response.data.results);

			const pokemonData = await Promise.all(response.data.results.map( pokemon => 
				axios.get(pokemon.url)));
				setPokemonDetails(pokemonData.map(response => response.data))
		}catch(error){
			console.error(error)
		}
	}

	useEffect(() => {
		fetchData()
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