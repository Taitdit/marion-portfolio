import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Page introuvable | Marion Charbonnier</title>
                <meta name="robots" content="noindex, follow" />
            </Helmet>

            <section className="notFound">
                <h1>Oups, cette page est introuvable !</h1>

                <p>
                    La page que vous recherchez n'existe pas ou a peut-être été déplacée.
                </p>

                <Link to="/" className="cta__primary">
                    Retour à l'accueil
                </Link>
            </section>
        </>
    );
};

export default NotFound;