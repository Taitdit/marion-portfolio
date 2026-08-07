import { Link, useLocation } from 'react-router-dom'
import './Footer.scss'
import { useState } from 'react';
import { useDarkMode } from "../contexts/DarkModeContext";
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FOOTER;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Footer = () => {
     const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const { dark } = useDarkMode();

    const location = useLocation();

    const isContact = location.pathname === '/contact'

    const handleSubmit = async (e) => {
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

    setLoading(true);

    try {
        await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
                email
            },
            {
                publicKey: PUBLIC_KEY
            }
        );
        setSuccess("Merci ! Je vous recontacterai dès que possible.");
        setEmail("");
    }
    catch (error) {
        console.error("Erreur EmailJS :", error);
        setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    }
    finally {
        setLoading(false);
    }

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

                    <button type="submit" className="cta__secondary" disabled={loading}>
                        <span>
                            {loading ? "Envoi..." : "Être recontacté"}
                        </span>
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