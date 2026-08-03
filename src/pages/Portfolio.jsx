import Bloctitle from '../components/Bloctitle'
import Grid from "../components/Grid"

const Portfolio = () => {
    const introContenu = () => <>Découvrez une selection de mes différentes réalisations.<br/>Chaque projet est une nouvelle quete, un nouveau défi que j’aime relever.</>
    return (
        <>
        <Bloctitle title="Portfolio" intro={introContenu()} />
        <div className='portfolio__container'>
            <Grid />
        </div>
        </>
    )
}
export default Portfolio