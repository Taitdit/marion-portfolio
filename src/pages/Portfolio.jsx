import { Helmet } from 'react-helmet-async'
import Bloctitle from "../components/Bloctitle"
import Grid from "../components/Grid"
import Canonical from '../components/Canonical'

const Portfolio = () => {
    const introContenu = () => (
    <>Découvrez une sélection de mes différentes réalisations.<br/>
    Chaque projet est une nouvelle quête, un nouveau défi que j’aime relever.<br/><br/>
    Du graphisme au webdesign, en passant par l’identité visuelle et les supports print,<br/>
    découvrez les différents univers qui composent mon portfolio.
    </>
    )
    return (
        <>
        <Helmet>
            <title>Portfolio | Marion Charbonnier - Graphiste & Webdesigner</title>
            <meta
                name="description"
                content="Découvrez le portfolio de Marion Charbonnier : projets de graphisme, webdesign, identité visuelle et créations digitales."
            />
        </Helmet>
        <Canonical url="/portfolio" />
        <Bloctitle title="Portfolio" intro={introContenu()} />
        <div className='portfolio__container'>
            <Grid />
        </div>
        </>
    )
}
export default Portfolio