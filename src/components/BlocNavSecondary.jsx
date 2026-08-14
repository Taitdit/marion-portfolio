import './BlocNavSecondary.scss'
import { Link, useLocation } from 'react-router-dom'

const BlocNavSecondary = ({smaller}) => {
    const location = useLocation()
    return (
        <nav  aria-label="Navigation secondaire" className={`blocNavSecondary ${smaller ? 'smaller' : ''}`}>
            {location.pathname !== '/' ? <Link className='cta__primary' to='/'><span>Retour sur mon profil</span><img src="/img/btnArrow.webp" alt="fleche bouton" /></Link>  : ''}
            {location.pathname !== '/portfolio' ? <Link className='cta__primary' to='/portfolio'><span>Mon super portfolio</span><img src="/img/btnArrow.webp" alt="fleche bouton" /></Link>  : ''}
            {location.pathname !== '/contact' ? <Link className='cta__primary' to='/contact'><span>Envie de me contacter ?</span><img src="/img/btnArrow.webp" alt="fleche bouton" /></Link>  : ''}
        </nav>
    )
}

export default BlocNavSecondary