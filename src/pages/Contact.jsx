import { Helmet } from 'react-helmet-async'
import BlocTitle from '../components/BlocTitle'
import Form from '../components/Form'
import Info from '../components/Info'
import Canonical from '../components/Canonical'
import OpenGraph from '../components/OpenGraph'
import './Contact.scss'

const Contact = () => {
    const introContenu = () => <>Vous avez un projet, une question ou simplement envie d’échanger ?<br/>N’hésitez pas à m’envoyer un message, je vous répondrai avec plaisir.</>
    return (
        <>
        <Helmet>
            <title>Contact | Marion Charbonnier - Graphiste & Webdesigner</title>
            <meta
                name="description"
                content="Contactez Marion Charbonnier, graphiste et webdesigner à Vannes, pour échanger autour d'un projet, d'une collaboration ou d'une opportunité professionnelle."
            />
        </Helmet>
        <OpenGraph
            title="Contact | Marion Charbonnier - Graphiste & Webdesigner"
            description="Contactez Marion Charbonnier, graphiste et webdesigner à Vannes, pour échanger autour d'un projet, d'une collaboration ou d'une opportunité professionnelle."
            url="/contact"
        />
        <Canonical url="/contact" />
        <BlocTitle title="Contactez-moi" intro={introContenu()} />
        <div className='contact__container'>
            <div id='contact-form' className='contact__form'>
                <Form />
            </div>
            <div className='contact__info'>
                <Info />
            </div>
        </div>
        </>
    )
}
export default Contact