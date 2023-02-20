import './StatsModal.css'

const statsModal = ({pokemon}) => {
    return(
<table className='container-info'>
  <thead>
    <tr>
    </tr>
  </thead>
  <tbody>
    {pokemon.stats.map((stat) => {
      const percentage = (stat.base_stat / 255) * 100;
      return (
        <tr key={stat.stat.name}>
          <td>{stat.stat.name}</td>
          <td>
            <progress className='progress-bar' max="100" value={percentage} />
          </td>
          <td className='value-state'>
          <span>{stat.base_stat}</span>
          </td>
        </tr>
      );
    })}
  </tbody>
</table>
    )

}
export default statsModal