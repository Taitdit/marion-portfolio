import { Link } from "react-router-dom"

const Politique =  () => {
    return (
        <div className='mention__container'>
            <h1>Politique de confidentialité</h1>
            <section className="mention__part">
                <h2>Collecte des données</h2>
                <p>Lorsque vous utilisez le formulaire de contact ou le formulaire de demande de rappel présent sur ce site, certaines informations personnelles peuvent être collectées :</p>
                <ul>
                <li>Nom</li>
                <li>Prénom</li>
                <li>Adresse e-mail</li>
                <li>Entreprise (facultatif)</li>
                <li>Sujet du message</li>
                <li>Contenu du message</li>
                </ul>
                <p>Ces informations sont uniquement celles que vous choisissez de renseigner.</p>
            </section>
            <section className="mention__part">
                <h2>Finalité du traitement</h2>
                <p>Les données collectées sont utilisées exclusivement afin de :</p>
                <ul>
                <li>répondre à votre demande de contact</li>
                <li>échanger avec vous dans le cadre d'une éventuelle collaboration professionnelle.</li>
                </ul>
                <p>Aucune donnée n'est utilisée à des fins commerciales ou publicitaires.</p>
            </section>
            <section className="mention__part">
                <h2>Destinataire des données</h2>
                <p>Les informations transmises via les formulaires sont exclusivement destinées à Marion Charbonnier.</p>
                <p>Afin d'assurer l'acheminement des messages, le site utilise le service EmailJS, qui permet l'envoi sécurisé des e-mails générés par les formulaires de contact.</p>
            </section>
            <section className="mention__part">
                <h2>Durée de conservation</h2>
                <p>Les informations transmises sont conservées uniquement pendant la durée nécessaire au traitement de votre demande et aux éventuels échanges qui en découlent.</p>
            </section>
            <section className="mention__part">
                <h2>Protection des données</h2>
                <p>Toutes les précautions raisonnables sont prises afin d'assurer la sécurité des informations transmises via ce site.</p>
            </section>
            <section className="mention__part">
                <h2>Vos droits</h2>
                <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
                <ul>
                    <li>droit d'accès à vos données</li>
                    <li>droit de rectification</li>
                    <li>droit de suppression</li>
                    <li>droit d'opposition au traitement de vos données.</li>
                </ul>
                <p>Pour exercer ces droits, vous pouvez contacter : <a href="mailto:charbonnier.marion@outlook.fr">Marion Charbonnier</a> via l'adresse indiquée ou via le formulaire sur la page <Link to='/contact' >Contact</Link> du site.</p>
            </section>
        </div>
    )
}
export default Politique