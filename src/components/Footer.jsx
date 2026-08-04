import { Link, useLocation } from 'react-router-dom'
import './Footer.scss'
import { useState } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";




const Footer = () => {
     const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { dark } = useDarkMode();

    const location = useLocation();

    const isContact = location.pathname === '/contact'

    const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
        setError("Veuillez renseigner votre adresse e-mail.");
        return;
    }

    if (!emailRegex.test(email)) {
        setError("Veuillez saisir une adresse e-mail valide.");
        return;
    }


    setSuccess("Merci ! Je vous recontacterai dès que possible.");
    setEmail("");
    };
    return (
        <div className={`footer ${dark ? 'dark' : ''}`}>
            <div className='footer__container'>
                 <h2>Un projet en tête ?</h2>

                <p className="footer__intro">
                    Laissez-moi simplement votre adresse e-mail et je vous recontacterai rapidement.
                </p>
                <form onSubmit={handleSubmit} noValidate>
                    <label htmlFor="footer-email">
                        Votre adresse e-mail :
                    </label>

                    <input
                        id="footer-email"
                        type="email"
                        placeholder="exemple@email.com"
                        value={email}
                        aria-invalid={Boolean(error)}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {error && (
                        <p className="footer__msgAlert footer__error">{error}</p>
                    )}

                    {success && (
                        <p className="footer__msgAlert footer__success">{success}</p>
                    )}

                    <button type="submit" className="cta__secondary">
                        <span>Être recontacté</span>
                    </button>
                </form>


                <p className="footer__more">
                    Plus de choses à me dire ?{" "}
                    {!isContact ?
                    <Link to="/contact">
                        Passez par la page contact.
                    </Link> :
                        <a href="#contact-form">
                            Accéder au formulaire
                        </a>
                    }
                </p>
            </div>
        </div>
    )
}
export default Footer