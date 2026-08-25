import './Projet.scss'

const BlocProjetMain = ({projet, alternativeIntro}) => {
    const normalizeLabel = (label) => {
        return label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/\//g, "");
    };

    return (
        <section className="projet__main">
            <div className='projet__colLeft'>
                {!alternativeIntro ? <p>{projet.smallDescription}</p> : ''}
                <div className='projet__info'>
                    <img src='/img/infoProjet.webp' alt='picto information - Marion Charbonnier' />
                    <div className='projet__info--txt'>
                        <h2>Informations</h2>
                        {!alternativeIntro ? 
                        <ul>
                            <li>
                                <span className='intitule'>Technologies et outils :</span>
                                <span className='txt'>{projet.technoOutils.length ? 
                                    <>{projet.technoOutils.map((t,i) => {
                                        if(i + 1  >= projet.technoOutils.length) {
                                            return <span key={`${t}-${i}`}>{t}</span>
                                        } else {
                                            return <span key={`${t}-${i}`}>{t},</span>
                                        }
                                    })}</>
                                : ''}</span>
                            </li>
                            <li>
                                <span className='intitule'>Date de livraison :</span>
                                <span className='txt'>{projet.date}</span>
                            </li>
                            <li>
                                <span className='intitule'>Cadre de création :</span>
                                <span className='txt'>{projet.cadre}</span>
                            </li>
                        </ul>
                        : 
                        <>
                        <p>{projet.smallDescription}</p>
                        <p>{projet.longDescription}</p>
                        <p>{projet.longDescription02}</p>
                        </>
                        }
                    </div>
                </div>
                {!alternativeIntro ?  <p>{projet.longDescription}</p> : ''}
            </div>
            <div className='projet__colRight'>
                <img src={`/img/${normalizeLabel(projet.title)}.webp`} alt={`${projet.title} - Marion Charbonnier`} />
            </div>
        </section>
    )
}

export default BlocProjetMain