import BLocLvl from '../components/BlocLvl'
import './BlocTitle.scss'

const Bloctitle = ({title, intro}) => {
    
    return (
        <div className="title__container">
            <div className="title__right">
                <BLocLvl />
            </div>
            <div className="title__left">
                <h1>{title}</h1>
                <p>{intro}</p>
            </div> 
        </div>
    )
}
export default Bloctitle