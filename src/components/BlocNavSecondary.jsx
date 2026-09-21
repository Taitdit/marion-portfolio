import './BlocNavSecondary.scss'
import { Link, useLocation } from 'react-router-dom'

const BlocNavSecondary = ({smaller, is404 = false}) => {
    const location = useLocation()
    console.log(is404)
    return (
        <nav  aria-label="Navigation secondaire" className={`blocNavSecondary ${smaller ? 'smaller' : ''}`}>
            {location.pathname !== '/' && !is404 ? 
            <Link className='cta__primary' to='/'><span>Retour sur mon profil</span><img src="/img/btnArrow.webp" alt="" /></Link>  
            : ''}
            {(location.pathname !== '/portfolio' && !location.pathname.startsWith('/portfolio/')) || is404 ? 
            <Link className='cta__primary' to='/portfolio'><span>Mon super portfolio</span><img src="/img/btnArrow.webp" alt="" /></Link>  
            : ''}
            {location.pathname !== '/contact' ? 
            <Link className='cta__primary' to='/contact'><span>Envie de me contacter ?</span><img src="/img/btnArrow.webp" alt="" /></Link>  : ''}
        </nav>
    )
}

export default BlocNavSecondary