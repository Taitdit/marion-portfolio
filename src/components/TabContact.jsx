import { useState } from 'react'
import './TabContact.scss'
import Arrow from './svg/Arrow'

const TabContact = () => {
    const [areaTab, setAreaTab] = useState([])
    const ask = [
        {
            id:'01',
            title:'Quel mode de travail je privilégie ?',
            img: 'no-picture',
            details:'Je préfère travailler en présentiel, même si un mélange présentiel/télétravail ne me dérange pas.'
        },
        {
            id:'02',
            title:'Comment peut-on échanger ?',
            img: 'no-picture',
            details:'Vous pouvez m’envoyer un premier message via le formulaire, puis nous pourrons convenir d’un rendez-vous en face à face, par téléphone ou en visio.'
        },
        {
            id:'02',
            title:'Quelles missions puis-je remplir ?',
            img: 'no-picture',
            details:'Vous pouvez m’envoyer un premier message via le formulaire, puis nous pourrons convenir d’un rendez-vous en face à face, par téléphone ou en visio.'
        },
        {
            id:'02',
            title:'Suis-je freelance ?',
            img: 'no-picture',
            details:'Je recherche vraiment un contrat en CDI mais je peux aussi répondre à des missions occasionnelles comme auto entrepreneur.'
        }
    ]

    const toggleArea = (id) => {
    setAreaTab((previousAreaTab) =>
        previousAreaTab.includes(id)
        ? previousAreaTab.filter((areaId) => areaId !== id)
        : [...previousAreaTab, id]
    );
    };

    return (
        <div className='tabContact'>
            {ask.length ? ask.map((item) => {
                return (
                 <div key={item.id} className={`ask ${areaTab.includes(item.id) ? 'active' : ''}`}>
                    <button onClick={() => toggleArea(item.id)} role='button' className={`ask__button ${areaTab.includes(item.id) ? 'active' : ''}`}>
                        <img src={`/img/${item.img}.webp`} alt={item.title} /><span>{item.title}</span><span className='ask__arrow'><Arrow/></span>
                    </button>
                    <div className='ask__details--container'>
                        <div className='ask__details'>
                            <p>{item.details}</p>
                        </div>
                    </div>
                 </div>   
                )
            }): ''}
        </div>
    )
}

export default TabContact