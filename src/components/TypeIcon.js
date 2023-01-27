import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf,faFire, faWater,faIcicles,faBolt, faFlask} from '@fortawesome/free-solid-svg-icons'
const TypeIcon = ({pokemon}) => {

    const typeIcons = {
		"grass": <FontAwesomeIcon icon={faLeaf}/>,
		"fire": <FontAwesomeIcon  icon={faFire}/>,
		"water": <FontAwesomeIcon icon={faWater}/>,
		"ice": <FontAwesomeIcon icon={faIcicles}/>,
		"electric": <FontAwesomeIcon icon={faBolt}/>,
		"poison": <FontAwesomeIcon icon={faFlask}/>
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