import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async'
import BlocTitle from '../components/BlocTitle'
import './NotFound.scss'

const NotFound = () => {
    return (
        <>
        <Helmet>
            <title>Page introuvable | Marion Charbonnier</title>
            <meta name="robots" content="noindex, follow" />
        </Helmet>
        <BlocTitle is404 />
        <section className="notFound">
            <h1>“404”<span>Oups !</span></h1>

            <p className="notFound__subtitle">
                Cette page semble introuvable ...
                <span>Vous vous êtes peut-être égaré en chemin ? </span>
            </p>
            <Link className='cta__primary' to='/'><img src="/img/btnArrow.webp" alt="" /><span>Retour à l'accueil</span></Link>  

        </section>
        </>
    )
}
export default NotFound