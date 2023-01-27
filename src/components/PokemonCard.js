import TypeIcon from "./TypeIcon";

const PokemonCard = ({pokemon, onKeyDown, onClick}) => {
	return (
		<div
			className="list-item"
			onKeyDown={onKeyDown}
			key={pokemon.id}
			onClick={onClick}
		>
			<div className="id-item">{`#${pokemon.id}`}</div>
			<img
				className="img-item"
				src={pokemon.sprites?.front_default}
				alt="pokemon"
			/>
			<h2 className="text-item">{pokemon.name}</h2>
            <TypeIcon pokemon={pokemon} /> 
		</div>
	);
};

export default PokemonCard;
