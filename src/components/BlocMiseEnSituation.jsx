import './Projet.scss'

const BlocMiseEnSituation = ({miseEnSituation, title}) => {
    const arrayPictures = miseEnSituation?.pictures || []
    return (
        <section className="projet__situation">
            <h2><img src="/img/fusee.webp" alt="Déroulé du projet picto - Marion Charbonnier" />Mise en application</h2>

                <div className='projet__situation--container'>
                        <div className={`projet__situation--grid grid grid--${arrayPictures.length >= 4 ? '4' : arrayPictures.length}`}>
                            {arrayPictures.map((visu, index) =>
                            <div key={`image-${index +1}`} className='img'>
                                <img src={`/img/${visu}.webp`} alt={`image Mise en application numéros ${index +1} du ${title} de Marion Charbonnier`} />
                            </div>)}
                        </div>
                        {miseEnSituation.urlVideo.length ? 
                        <div className='projet__situation--video'>
                            <div className="video">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${miseEnSituation.urlVideo}`}
                                    title={`Vidéo du ${title} de Marion Charbonnier`}
                                    loading="lazy"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                />
                            </div>
                        </div>
                        : ''}
                </div>
        </section>
    )
}

export default BlocMiseEnSituation