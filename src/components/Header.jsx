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
        <section className="header">
            <div className={`header__container ${open ? 'active' : ''}`}>
                <div className='header__nav'>
                    <div className='nav__img'>
                    {location.pathname !== '/' ? 
                         <Link role='link' to="/">
                            <img src='/img/marion-profile.webp' alt='photo profile de Marion Charbonnier' />
                        </Link>
                        : 
                        <img src='/img/marion-profile.webp' alt='photo profile de Marion Charbonnier' />
                    }
                    <button className={`header__darkmode ${dark ? 'active' : ''}`}  role='button' aria-label='dark mode' onClick={() => toggleDarkMode()}>
                        <SunIcon className='picto' width='49' height='49' />
                    </button>
                    </div>
                    <nav  aria-label="Navigation principale" className='nav__container'>
                        <ul>
                            <li className={`${location.pathname === '/' ? 'active' : ''}`}>
                                <Link role='button' onClick={(e) => {if (location.pathname === '/') e.preventDefault() }} className={`nav__item ${location.pathname === '/' ? 'active' : ''}`} aria-disabled={location.pathname === '/'} to='/'><HomePicto width='43' height='43' className='picto' /></Link>
                            </li>
                            <li className={`${location.pathname === '/portfolio' ? 'active' : ''}`}>
                                <Link role='button' onClick={(e) => {if (location.pathname === '/portfolio') e.preventDefault() }} className={`nav__item ${location.pathname === '/portfolio' ? 'active' : ''}`} aria-disabled={location.pathname === '/portfolio'} to='/portfolio'><PortfolioPicto width='43' height='43' className='picto' /></Link>
                            </li>
                            <li className={`${location.pathname === '/contact' ? 'active' : ''}`}>
                                <Link role='button' onClick={(e) => {if (location.pathname === '/contact') e.preventDefault() }} className={`nav__item ${location.pathname === '/contact' ? 'active' : ''}`} aria-disabled={location.pathname === '/contact'} to='/contact'><ContactPicto width='43' height='43' className='picto'  /></Link>
                            </li>
                        </ul>
                    </nav>
                </div>


                    <button className={`header__darkmode ${dark ? 'active' : ''}`}  role='button' aria-label='dark mode' onClick={() => toggleDarkMode()}>
                        <SunIcon className='picto' width='49' height='49' />
                    </button>

            </div>
                <div className='header__burger'>
                    <button className="burger__button" onClick={() => toggleMenu()}>
                        <BurgerPicto state={open ? 'open' : 'close'} />
                    </button>
                </div>

        </section>
        {open ? <div onClick={() => toggleMenu()} className='background__header'></div> : ''}
        </>
    )
}
export default Header