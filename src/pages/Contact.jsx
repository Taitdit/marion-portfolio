import Bloctitle from '../components/Bloctitle'
import Form from '../components/Form'
import Info from '../components/Info'
import './Contact.scss'

const Contact = () => {
    const introContenu = () => <>Vous avec un projet, une question ou simplement envie d’échanger ?<br/>N’hésitez pas à m’envoyer un message, je vous répondrai avec plaisir.</>
    return (
        <>
        <Bloctitle title="Contactez-moi" intro={introContenu()} />
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