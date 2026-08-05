import './Talents.scss'

const Talents = ({allTalents}) => {
    return (
        <div className="talents__container">
            {allTalents.length ? allTalents.map((item) => (
                <div className='talents__item' key={item.title}>
                    <div className='talents__title'>
                        <img src={`/img/${!item.img ? 'no-picture' : item.img}.webp`} alt={`Talent ${item.title} de Marion Charbonnier`} />
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