import TypeIcon from "./TypeIcon"

const InfoModal = ({pokemon}) => {

    return(
        <div className="container-info">
            <div>
                <p>{`ID  ${pokemon.id}`}</p>
                <p>{`Height  ${pokemon.height}`}</p>
                <p>{`Weight  ${pokemon.weight}`}</p>
                <div>
                    Abilities:
                    { pokemon.abilities.map((ability) => (
                    <span key={ability.ability.name}>{` ${ability.ability.name}`}</span>
                ))}
                </div>
                <TypeIcon pokemon={pokemon} />
                <div>
                    Forms:
                { pokemon.forms.map((forms) => (
                    <span key={forms.name}>{forms.name}</span>
                ))}
                </div>
                
            </div>
        </div>
    )
}

export default InfoModal