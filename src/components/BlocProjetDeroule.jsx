import './Projet.scss'

const BlocProjetDeroule = ({derouleProjet, title}) => {
    const contenuePart = (img, txt, side, index) => {
        const trueIndex = index + 1
        if(side === 'left') {
            return (
                <>
                {img.length ? <img src={`/img/${img}.webp`} alt={`image de gauche de la partie ${trueIndex} du déroulé du ${title} - Marion Charbonnier`} /> : ''}
                {txt.length ? <div className='projet__deroule--txt' dangerouslySetInnerHTML={{ __html: txt }} /> : ''}
                </>
            ) 
        } else {
            return (
                <>
                {txt.length ? <div className='projet__deroule--txt' dangerouslySetInnerHTML={{ __html: txt }} /> : ''}
                {img.length ? <img src={`/img/${img}.webp`} alt={`image de droite de la partie ${trueIndex} du déroulé du ${title} - Marion Charbonnier`} /> : ''}
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