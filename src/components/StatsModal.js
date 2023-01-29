const statsModal = ({pokemon}) => {
    return(
        <div>
            {pokemon.stats.map((stats) => (
            <p key={stats.stat.name}>
                {`${stats.stat.name} ${stats.base_stat}`}      
            </p>
            ))}
        </div>
    )

}
export default statsModal