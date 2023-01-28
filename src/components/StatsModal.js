const statsModal = ({pokemon}) => {
    return(
        <div>
        {console.log(pokemon)}
        <p>{pokemon.stats.map((stats) => (
            <p>
                {stats.stat.name}
                {stats.base_stat}
            </p>
        ))}</p>
    </div>

    )

}
export default statsModal