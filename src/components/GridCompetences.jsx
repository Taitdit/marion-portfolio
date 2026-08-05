import './GridCompetences.scss'

const GridCompetences = ({allComp, layout}) => {
    return (
        <div className={`competences__container ${layout}`}>
            {allComp.length ? allComp.map((item) => (
                <div className='competences__elmt' key={item}>
                    <img src={`/img/${item.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/\s+/g, "").replace('/', '')}.webp`} alt={`compétence ${item} de Marion Charbonnier`} />
                    <p>{item}</p>
                </div>
            )) : '' }
        </div>
    )
}

export default GridCompetences