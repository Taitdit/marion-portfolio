import './Info.scss'
import TabContact from '../components/TabContact'


const Info = () => {

    const infoUtiles = [
        {
            img: 'no-picture',
            title: 'E-mail',
            detail: 'charbonnier.marion@outlook.fr',
            linkDetail: 'mailto:charbonnier.marion@outlook.fr'
        },
        {
            img: 'no-picture',
            title: 'Localisation',
            detail: 'Disponible sur VANNES (56) et alentours'
        },
        {
            img: 'no-picture',
            title: 'Mobilité',
            detail: 'Permis B • Déplacements possibles'
        },
        {
            img: 'no-picture',
            title: 'Disponibilité',
            detail: 'Sous  1 mois'
        }
    ]


    return (
        <div className='info'>
            <div className="info__heading">
                <img src="/img/no-picture.webp" alt="Informations utilles - Marion Charbonnier" />

                <h2 className="form__title">
                Informations utilles
                </h2>
            </div>

            <div className='info__container'>
                <ul>
                    {infoUtiles?.length ? infoUtiles.map((item) => (
                        (
                            <li key={item.title}>
                                <span className='title'><img src={`/img/${item.img}.webp`} alt={item.title} /> <span>{item.title}</span></span>
                                {item.linkDetail ? <a href={item.linkDetail} target='_blank'>{item.detail}</a> : <span>{item.detail}</span>}
                            </li>
                        )
                    )) : '' }
                </ul>
            </div>
            <TabContact/>
        </div>
    )
}

export default Info