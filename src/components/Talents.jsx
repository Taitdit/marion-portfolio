import './Talents.scss'

const Talents = ({allTalents}) => {
    return (
        <div className="talents__container">
            {allTalents.length ? allTalents.map((item) => (
                <div className='talents__item'>
                    <div className='talents__title'>
                        <img src={`./img/${!item.img ? 'no-picture' : item.img}.png`} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                    <p className='talents__description'>{item.description}</p>
                </div>
            )
        ) : ''}
        </div>
    )
}

export default Talents