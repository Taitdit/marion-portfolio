import './GridXp.scss'

const GridXp = ({allComp}) => {
    return (
        <div className="experiences__container">
            {allComp.length ? allComp.map((item) => (
                <div className='experiences__item' key={item.title}>
                    <div className='experiences__title'>
                        <h3>{item.date ? item.date :  item.titleFormation ? item.titleFormation : item.title}</h3>
                        <p>{item.date ? item.title : ''}{item.status ? ' - ' : ''}{item.status ? <em>{item.status}</em> : ''}</p>
                        
                    </div>
                    <p className='experiences__description'>{item.description}</p>
                </div>
            )) : '' }
        </div>
    )
}

export default GridXp