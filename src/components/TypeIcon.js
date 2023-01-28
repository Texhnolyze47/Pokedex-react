import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as icon from '@fortawesome/free-solid-svg-icons'
import './TypeIcon.css'
const TypeIcon = ({pokemon}) => {

    const typeIcons = {
		"grass": <FontAwesomeIcon icon={icon.faLeaf}/>,
		"fire": <FontAwesomeIcon  icon={icon.faFire}/>,
		"water": <FontAwesomeIcon icon={icon.faWater}/>,
		"ice": <FontAwesomeIcon icon={icon.faIcicles}/>,
		"electric": <FontAwesomeIcon icon={icon.faBolt}/>,
		"poison": <FontAwesomeIcon icon={icon.faFlask}/>,
        "normal": <FontAwesomeIcon icon={icon.faCircle} />,
        "fighting": <FontAwesomeIcon icon={icon.faHandFist} />,
        "ground": <FontAwesomeIcon icon={icon.faMountain} />,
        "flying": <FontAwesomeIcon icon={icon.faWind} />,
        "psychic": <FontAwesomeIcon icon={icon.faHurricane}/>,
        "bug": <FontAwesomeIcon icon={icon.faBug}/>,
        "rock": <FontAwesomeIcon icon={icon.faHillRockslide}/>,
        "ghost": <FontAwesomeIcon icon={icon.faGhost}/>,
        "dragon": <FontAwesomeIcon icon={icon.faDragon}/>,
        "dark": <FontAwesomeIcon icon={icon.faMoon}/>,
        "steel": <FontAwesomeIcon icon={icon.faBurst}/>,
        "fairy": <FontAwesomeIcon icon={icon.faHandSparkles}/>
	}
    return(
        <div className="types">
        {pokemon.types.map((types, i) => {
            if (typeIcons[types.type.name]) {
                return (
                    <p className={types.type.name} key={i}>
                        {typeIcons[types.type.name]}
                    </p>
                );
            } else {
                return <p key={i}>Tipo desconocido</p>;
            }
        })}
    </div>
    )
}

export default TypeIcon