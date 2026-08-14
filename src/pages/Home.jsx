import './Home.scss'
import Bloc from '../components/Bloc'
import WrongCta from '../components/WrongCta'
import Cta from '../components/Cta'
import GridCompetences from '../components/GridCompetences'
import GridXp from '../components/GridXp'
import Talents from '../components/Talents'
import { useEffect, useState } from 'react'
import Chevron from '../components/svg/Chevron'
import BlocNavSecondary from '../components/BlocNavSecondary'

const Home = () => {
    const [valueCaroussel, setValueCaroussel] = useState(1)
    

    useEffect(() => {
    for (let i = 1; i <= 5; i++) {
        const image = new Image()
        image.src = `/img/marion_0${i}.webp`
    }
}, [])

    const blocB = () => {
        return (
            <div className='bloc__B picture'>
                <div className='caroussel'>
                    <button
                        className='arrow'
                        onClick={() =>
                            setValueCaroussel((currentValue) =>
                                currentValue === 1 ? 4 : currentValue - 1
                            )
                        }
                    >
                        <Chevron />
                    </button>

                    <img
                        className='picture__img'
                        src={`/img/marion_0${valueCaroussel}.webp`}
                        alt='Marion Charbonnier'
                    />

                    <button
                        className='arrow right'
                        onClick={() =>
                            setValueCaroussel((currentValue) =>
                                currentValue === 4 ? 1 : currentValue + 1
                            )
                        }
                    >
                        <Chevron />
                    </button>
                </div>
            </div>
        )
    }
    const allComp = ['Photoshop', 'Illustrator', 'After Effect', 'Indesign', 'Wordpress', 'Figma', 'HTML', 'CSS', 'Canva']
    const allExtra = ['Dessin', 'Jeux', 'Gaming', 'Lecture', 'Bricolage', 'Series/films']


    const allXp = [
        {
            date: "2023 - Aujourd'hui",
            intitule: "Graphiste Webdesigner",
            title: "Dike Déco - Alternance puis CDI",
            status: "Présentiel",
            description: "Photomontages de décors de Noël, création de supports Web et print, gestion du site, des catalogues, des stocks et des produits."
        }, 
        {
            date: "2021 - 2022",
            intitule: "Webdesigner",
            title: "Akatek - Alternance",
            status: "100% Télétravail",
            description: "Conception de maquettes web, UI, intégration front-end et collaboration avec les développeurs."
        },
        {
            date: "2020 - 2021",
            intitule: "Graphiste Webdesigner",
            title: "Stages",
            status: "Présentiel et télétravail",
            description: "Réalisation de projets en graphisme print et web, design d'interfaces et développement web."
        },
        {
            date: "2015 - 2019",
            intitule: "Vendeuse conseil",
            title: "NANTES / LORIENT - CDI/CDD",
            status: "Présentiel",
            description: "Vente, conseil client et préparation de commandes en fleuristerie et en boulangerie."
        },

    ]
    const allFormation = [
        {
            titleFormation: "Master - Bac+5",
            title: "Direction artistique digitale",
            description: "My digital school - VANNES"
        },
        {
            titleFormation: "Bachelor - Bac+3",
            title: "Designer Web",
            description: "My digital school - VANNES"
        },
        {
            titleFormation: "Titre pro - Bac+2",
            title: "Designer Web",
            description: "My digital school - VANNES"
        },
        {
            titleFormation: "CAP",
            title: "Fleuriste",
            description: "Ifocotep - NANTES"
        },
        {
            titleFormation: "Bac - Littéraire",
            title: "Option arts plastique / Histoire des arts",
            description: "Lycée Ernest Renan - St BRIEUC"
        },
    ]
    const allTalents = [
        {
            title: "Créativité",
            img: "origami",
            description: "J'aime donner vie aux idées en leur apportant une identité unique."
        },
        {
            title: "Sens du détail",
            img: "cristal",
            description: "J'accorde une grande importance à la cohérence, aux finitions et à la qualité du résultat."
        },
        {
            title: "Pragmatisme",
            img:"engrenage",
            description: "J'aime que les idées soient réalisables, utiles et efficaces, pas seulement esthétiques."
        },
        {
            title: "Versatilité graphique",
            img: "cube",
            description: "Je sais passer d'un univers hyper coloré à une approche plus sobre selon le projet."
        },
        {
            title: "Esprit curieux",
            img: "boite",
            description: "J'aime comprendre, apprendre et tester de nouvelles méthodes."
        }
    ]

    const lvl = () => {
        return (
        <div className='lvl'>
            <div className='lvl__container'>
            <img src='/img/epee.webp' alt="Epée - Marion Charbonnier" />
            <div className='lvl__txt'><p className='lvl__title'>Lvl 30</p><p className='lvl__sstxt'>Prête pour de nouvelles aventures</p></div>
            <p className='lvl__sstxt'>Prête pour de nouvelles aventures</p>
            </div>
            <BlocNavSecondary smaller={true} />
        </div>
        )
    }

    const contenuA = () => {
        return (

        <div className='intro__container'>
            <div className='intro__intro'>
            <h1>Marion Charbonnier</h1>
            <div className='bloc__intitule'>
                <div className='intitule'>
                    <h2><img src='/img/potions.webp' alt='graphiste - webdesigner'/> Graphiste - Webdesigner</h2>
                    <p>Vannes et alentours - Mobile (permis B) - Disponible sous 1 mois</p>
                </div>
            </div>
            </div>
            <Bloc contenu={lvl()} />
            </div>
        )
    }

    const contenuAprime = () => {
        return ( 
        <>
            <p>J’aime mon métier et ce qu’il me permet de créer au quotidien. Curieuse et motivée, je cherche constamment à développer mes compétences, explorer de nouvelles méthodes et optimiser ma façon de travailler.</p>

            <p>Chaque projet est pour moi l’occasion de comprendre un besoin et d’apporter une réponse créative, cohérente et adaptée. J’aime explorer différentes pistes afin de concevoir des réalisations qui répondent pleinement aux attentes.</p>
        </>
        )
    }
    const contenuC = () => {
        return (
            <><p>À la recherche d’un environnement humain où l’échange, la créativité et l’esprit d’équipe sont au cœur des projets, je souhaite m’investir pleinement dans des missions porteuses de sens et continuer à développer mon savoir-faire.</p>
            <div className='bloc__container-cta'>
            <WrongCta label='CDI' picto='cdi' withPicto={true} />
            <WrongCta label='Présentiel ou Hybride' picto='presentiel' withPicto={true} />
            <WrongCta label='Vannes' picto='vannes' withPicto={true} />
            </div>
            </>
        )
    }


    const contenuDorH = (status) => {
        return (
           <GridCompetences layout={status === 'd' ? '' : status === 'h' ? 'simple' : ''} allComp={status === 'd' ? allComp : status === 'h' ? allExtra : ''} />
        )
    }
    const contenuEOrF = (status) => {
        const witchTab = status === 'e' ? allXp : status === 'f' ? allFormation : ''
        return (
            <GridXp allComp={witchTab} status={status} />        
        )
    }
    
    const contenuG = () => {

        return (
            <Talents allTalents={allTalents} />
        )
    }

    return (
        
        <div className="home">
            <div className='home__info'>
                <div className="home__info-pricipales">
                    <Bloc wichBloc='A' 
                    type="tertiary"
                    contenu={contenuA()} />
                    <Bloc wichBloc='Aprime' 
                    picto='cible'
                    titleContenu='Mes motivations'
                    contenu={contenuAprime()} />
                    {blocB()}
                    <Bloc wichBloc='C' 
                    contenu={contenuC()} />
                </div>
                <div className='home__info-special'>
                    <div className='col__A col'>
                        <Bloc wichBloc='C' 
                        contenu={contenuC()} />
                        {blocB()}
                    </div>
                    <div className='col__B col'>
                        <Bloc wichBloc='Aprime' 
                        picto='cible'
                        titleContenu='Mes motivations'
                        contenu={contenuAprime()} />
                        <Bloc wichBloc='A' 
                        type="tertiary"
                        contenu={contenuA()} />
                    </div>
                </div>
                <div className="home__info-secondaire">
                    <Bloc wichBloc='D'
                    picto='coffre'
                    titleContenu='Compétences'
                    contenu={contenuDorH('d')} />
                    <Bloc wichBloc='E' 
                    titleContenu='Journal de bord'
                    contenu={contenuEOrF('e')} classSuplementaire='bigFont' picto='journal' type="secondary" />
                    <div className='bloc__F-container'>
                        <Bloc wichBloc='A' 
                        type="tertiary"
                        contenu={contenuA()} />
                        <Bloc wichBloc='E' 
                         titleContenu='Journal de bord'
                        contenu={contenuEOrF('e')} classSuplementaire='bigFont' picto='journal' type="secondary" />
                        <Bloc wichBloc='D'
                        picto='coffre'
                        titleContenu='Compétences'
                        contenu={contenuDorH('d')} />
                        <Bloc wichBloc='F' 
                         titleContenu='Quêtes validées'
                        contenu={contenuEOrF('f')} classSuplementaire='bigFont' picto='badge' />
                    </div>
                    <Bloc wichBloc='Aprime'
                    picto='cible'
                    titleContenu='Mes motivations'
                    contenu={contenuAprime()} />
                    <div className='bloc__G-container'>
                        <Bloc wichBloc="G" titleContenu="Talents passifs" picto='empty' contenu={contenuG()} />
                        <div className='bloc__H-container'>
                            <Bloc wichBloc='H' 
                            titleContenu='Extras'
                            picto='empty'
                            contenu={contenuDorH('h')} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home