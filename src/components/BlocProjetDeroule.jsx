import './Projet.scss'

const BlocProjetDeroule = ({derouleProjet, title}) => {
    const contenuePart = (img, txt, side, index) => {
        const trueIndex = index + 1

        const div = () => <div className='projet__deroule--txt' dangerouslySetInnerHTML={{ __html: txt }} /> 
        const media = (m) => {
            if(m.startsWith("moovie-")) {
                const urlYoutube = m.split("moovie-")
                return (
                    <iframe
                        src={`https://www.youtube-nocookie.com/embed/${urlYoutube[1]}`}
                        title={`Vidéo du ${title} de Marion Charbonnier`}
                        loading="lazy"
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        referrerPolicy="strict-origin-when-cross-origin"
                    />
                )      
            } else {
                return <img src={`/img/${m}.webp`} alt={`image de droite de la partie ${trueIndex} du déroulé du ${title} - Marion Charbonnier`} /> 
            }
        } 
        if(side === 'left') {
            return (
                <>
                {img.length ? 
                    <div className='mediaContainer'>
                        {img.length > 1 ? 
                            <>
                                {media(img[0])}
                                <div className='mediaLegend'>
                                    <p>
                                    {img[1].map((i, index) => {
                                       if(index === 0) return <span key={i}>{i}</span>
                                       else return <span key={i}>, {i}</span>
                                    })}
                                    </p>
                                </div>
                            </>
                        :
                            media(img[0])
                        }
                    </div>
                : ''}
                {txt.length ? 
                        div()
                    : ''}
                </>
            ) 
        } else {
            return (
                <>
                {txt.length ? 
                    div()            
                : ''}
                
                {img.length ? 
                     <div className='mediaContainer'>
                        {img.length > 1 ? 
                            <>
                                {media(img[0])}
                                <div className='mediaLegend'>
                                    <p>
                                    {img[1].map((i, index) => {
                                       if(index === 0) return <span key={i}>{i}</span>
                                       else return <span key={i}>, {i}</span>
                                    })}
                                    </p>
                                </div>
                            </>
                        :
                            media(img[0])
                        }
                    </div>
                : ''}
                </>
            ) 
        }
    }
    
    return (
        <section className="projet__deroule">
            <h2><img src="/img/drapeau.webp" alt="Déroulé du projet picto - Marion Charbonnier" />Déroulé du projet</h2>

                <div className='projet__deroule--container'>
                        {Object.entries(derouleProjet).map(([key, objtPart], index) => {
                        const allEmpty = objtPart.imgLeft.length == 0 && objtPart.txtLeft.length == 0 && objtPart.imgRight.length == 0 && objtPart.txtRight.length == 0
                        const fullDivRight = objtPart.imgLeft.length == 0 && objtPart.txtLeft.length == 0
                        const fullDivLeft = objtPart.imgRight.length == 0 && objtPart.txtRight.length == 0
                        
                        if(allEmpty) return false
                        
                        return (
                        
                            <div key={key} className={`projet__deroule--part ${objtPart?.reverseMob === 'true' ? 'reverse' : ''} ${fullDivLeft || fullDivRight ? 'full' : ''}`}>
                                
                                {fullDivLeft || fullDivRight ? 
                                fullDivLeft ?
                                <div className='projet__deroule--bloc'>
                                    {contenuePart(objtPart.imgLeft, objtPart.txtLeft, 'left', index)}
                                </div> : 
                                 <div className='projet__deroule--bloc'>
                                    {contenuePart(objtPart.imgRight, objtPart.txtRight, 'left', index)}
                                 </div>
                                : 
                                <>
                                <div className='projet__deroule--bloc left'>
                                    {contenuePart(objtPart.imgLeft, objtPart.txtLeft, 'left', index)}
                                </div>
                                <div className='projet__deroule--bloc right'>
                                    {contenuePart(objtPart.imgRight, objtPart.txtRight, 'right', index)}
                                </div>
                                </>
                                }
                            </div>
                         )}
                         )}
                </div>
        </section>
    )
}

export default BlocProjetDeroule