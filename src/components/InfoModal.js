const InfoModal = ({pokemon}) => {

    return(
        <div className="container-info">
            <p>ID {pokemon.id}</p>
            <p>Height {pokemon.height}</p>
            <p>Weight {pokemon.weight}</p>
            { pokemon.abilities.map((ability) => (
                <p key={ability.ability.name}>{ability.ability.name}</p>
            ))}
            {pokemon.types.map((types) => (
                <p key={types.type.name}>{types.type.name}</p>
            ))}
            { pokemon.forms.map((forms) => (
                <p key={forms.name}>{forms.name}</p>
            ))}
        </div>
    )
}

export default InfoModal