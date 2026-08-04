import Bloc from './Bloc'
import './BLocLvl.scss'


const BLocLvl = () => {
    const lvlNotHome = () => {
        return (
        
        <div className='lvlNotHome__container'>
            <div className="lvlNotHome__img">
                <img src="/img/marion.webp" alt="Illustration Marion Charbonnier" />
            </div>
            <div className="lvlNotHome__info">
                <div className="lvlNotHome__title">
                    <h2>Marion Charbonnier</h2>
                        <p>Graphiste - Webdesigner</p>
                </div>
                <div className="lvlNotHome__lvl">
                    <img src='/img/epee.webp' alt="Epée" />
                    <div className='lvl__txt'><p className='lvl__title'>Lvl 30</p><p className=' '>Prête pour de nouvelles aventures</p></div>
                </div>
            </div>

        </div>
        )
    }
    return (
        <Bloc contenu={lvlNotHome()} classSuplementaire='lvlNotHome' />
    )
}

export default BLocLvl