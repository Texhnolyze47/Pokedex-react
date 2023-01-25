import axios from "axios";
import { useEffect, useState } from "react";

const Pokemons = () => {
	const [pokemons, setPokemons] = useState([]);
	const [pokemonDetails, setPokemonDetails] = useState([]);

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

	return (
		<div className="container-grid">
				{pokemonDetails.map((pokemonDetail) => (
					<div key={pokemonDetail.name}>
						<h2 className="grid-item">{pokemonDetail.name}</h2>
                        <img className="grid-item" src={pokemonDetail.sprites.front_default} alt="pokemon"/>
					</div>
				))}
		</div>
	);
};

export default Pokemons;
