import TypeIcon from "./TypeIcon"
import './InfoModal.css'

const InfoModal = ({pokemon}) => {

    return(
<table className="container-info">
  <tbody>
    <tr>
      <td className="title-att">ID</td>
      <td>{`#${pokemon.id}`}</td>
    </tr>
    <tr>
      <td className="title-att">Height</td>
      <td>{pokemon.height}</td>
    </tr>
    <tr>
      <td className="title-att">Weight</td>
      <td>{pokemon.weight}</td>
    </tr>
    <tr>
      <td className="title-att">Abilities</td>
      <td>
        {pokemon.abilities.map((ability) => (
          <div key={ability.ability.name}>{`${ability.ability.name}`}</div>
        ))}
      </td>
    </tr>
    <tr>
      <td className="title-att">Type</td>
      <td><TypeIcon pokemon={pokemon} /></td>
    </tr>
    <tr>
      <td className="title-att">Forms</td>
      <td>
        {pokemon.forms.map((forms) => (
          <span key={forms.name}>{" " + forms.name}</span>
        ))}
      </td>
    </tr>
  </tbody>
</table>
    )
}

export default InfoModal