import BLocLvl from '../components/BlocLvl'
import './BlocTitle.scss'
import Breadcrumb from './Breadcrumb'

const Bloctitle = ({title, intro, infoSup, breadcrumb}) => {
    
    return (
        <div className="title__container">
            <div className="title__right">
                <BLocLvl />
            </div>
            <div className="title__left">
                {breadcrumb ? <Breadcrumb title={breadcrumb} /> : ''}
                <h1>{title}</h1>
                {infoSup?.length ?<div className='title__type'>
                    {infoSup.map((type) => <div key={type} className='title__type--item'>{type}</div>)}
                </div> : ''}
                <p>{intro}</p>
            </div> 
        </div>
    )
}
export default Bloctitle