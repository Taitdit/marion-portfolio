import { useState } from 'react'
import BurgerPicto from '../assets/BurgerPicto'
import "./Header.scss"
import { Link, useLocation } from 'react-router-dom'
import HomePicto from './svg/HomePicto'
import PortfolioPicto from './svg/PortfolioPicto'
import ContactPicto from './svg/ContactPicto'
import SunIcon  from './svg/SunIcon'
import { useDarkMode } from "../contexts/DarkModeContext";
import { useMenuHeader } from "../contexts/MenuHeaderContext";


const Header = () => {
    // const [open, setOpen] = useState(false)
    const location = useLocation();
    const { dark, toggleDarkMode } = useDarkMode();
    const { open, toggleMenu } = useMenuHeader();


    // const showRsvpSection = location.pathname === "/" 

    return (
        <>
        <header className="header">
            <div className={`header__container ${open ? 'active' : ''}`}>
                <div className='header__nav'>
                    <div className='nav__img'>
                    {location.pathname !== '/' ? 
                         <Link aria-label="Accueil" to="/">
                            <img src='/img/marion-profile.webp' alt="Retour à l'accueil - Marion Charbonnier" />
                        </Link>
                        : 
                        <img src='/img/marion-profile.webp' alt="Marion Charbonnier" />
                    }
                    <button className={`header__darkmode ${dark ? 'active' : ''}`}  role='button' aria-label='dark mode' onClick={() => toggleDarkMode()}>
                        <SunIcon className='picto' width='49' height='49' />
                    </button>
                    </div>
                    <nav  aria-label="Navigation principale" className='nav__container'>
                        <ul>
                            <li className={`${location.pathname === '/' ? 'active' : ''}`}>
                                <Link aria-label="Accueil" aria-current={location.pathname === '/' ? 'page' : undefined} className={`nav__item ${location.pathname === '/' ? 'active' : ''}`} to='/'><HomePicto width='43' height='43' className='picto' /></Link>
                            </li>
                            <li className={`${location.pathname === '/portfolio' ? 'active' : ''}`}>
                                <Link aria-label="Portfolio" aria-current={location.pathname === '/portfolio' ? 'page' : undefined} className={`nav__item ${location.pathname === '/portfolio' ? 'active' : ''}`} to='/portfolio'><PortfolioPicto width='43' height='43' className='picto' /></Link>
                            </li>
                            <li className={`${location.pathname === '/contact' ? 'active' : ''}`}>
                                <Link aria-label="Contact" aria-current={location.pathname === '/contact' ? 'page' : undefined} className={`nav__item ${location.pathname === '/contact' ? 'active' : ''}`} to='/contact'><ContactPicto width='43' height='43' className='picto'  /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>


                    <button type='button' className={`header__darkmode ${dark ? 'active' : ''}`}  aria-label={
                        dark
                            ? "Activer le mode clair"
                            : "Activer le mode sombre"
                    } onClick={() => toggleDarkMode()}>
                        <SunIcon className='picto' width='49' height='49' />
                    </button>

            </div>
                <div className='header__burger'>
                    <button type='button' className="burger__button" aria-label={
                            open
                                ? "Fermer le menu"
                                : "Ouvrir le menu"
                        }
                        aria-expanded={open} onClick={() => toggleMenu()}>
                        <BurgerPicto state={open ? 'open' : 'close'} />
                    </button>
                </div>

        </header>
        {open ? <div onClick={() => toggleMenu()} className='background__header'></div> : ''}
        </>
    )
}
export default Header