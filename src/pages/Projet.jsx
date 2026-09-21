import { Helmet } from 'react-helmet-async'
import { useParams } from "react-router-dom"
import BlocTitle from "../components/BlocTitle";
import { useEffect, useState } from "react";
import BlocProjetMain from "../components/BlocProjetMain";
import BlocDetailProject from "../components/BlocDetailProject";
import BlocMiseEnSituation from "../components/BlocMiseEnSituation";
import BlocPagination from "../components/BlocPagination";
import Canonical from '../components/Canonical';
import NotFound from './NotFound';

const Projet = () => {
    const { url } = useParams();
    const [allProjects, setAllProjects] = useState([]);
    const [projets, setProjets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [sizeAllProject, setSizeAllProject] = useState(0)
    const [idNext, setIdNext] = useState(0)
    const [idPrev, setIdPrev] = useState(0)
    const [urlNext, setUrlNext] = useState('')
    const [urlPrev, setUrlPrev] = useState('')

    const normalizeLabel = (label) => {
        return label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/\//g, "");
    };


    useEffect(() => {
        const splitUrlArray = url.split('-')
        const titleUrl = splitUrlArray[1]
        fetch("/portfolio.json")
        .then((response) => {
            if (!response.ok) {
            throw new Error("Impossible de charger les projets");
            }

            return response.json();
        })
        .then((data) => {
            setAllProjects(data);
            setSizeAllProject(data.length);
            const projetTrouve = data.find(
            (item) => normalizeLabel(String(item.title)) === String(titleUrl)
            );

            if (!projetTrouve) {
                setError("not-found");
                return;
            }

            setProjets(projetTrouve);
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    }, [url]);


    useEffect(() => {
        
        if(parseInt(projets.id) >= sizeAllProject) {
            setIdNext(1)
        } else {
            setIdNext(parseInt(projets.id) + 1)
        }
        if (parseInt(projets.id) <= 1) {
            setIdPrev(sizeAllProject)
        } else {
            setIdPrev(parseInt(projets.id) - 1)
        }

    }, [sizeAllProject, projets.id])

    useEffect(() => {
        if (!allProjects.length || !idPrev || !idNext) return;
        const nextProject = allProjects.find(
            (project) => Number(project.id) === Number(idNext)
        );
        const prevProject = allProjects.find(
            (project) => Number(project.id) === Number(idPrev)
        );

        if (nextProject) {
            setUrlNext(`projet-${normalizeLabel(nextProject.title)}`);
        }
        if (prevProject) {
            setUrlPrev(`projet-${normalizeLabel(prevProject.title)}`);
        }

    }, [allProjects, idPrev, idNext])



    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error === "not-found") {
        return <NotFound />;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const title = `Projet : ${projets.title}`
    return (
        <>
            <Helmet>
                <title>{`${projets.title} | Portfolio de Marion Charbonnier`}</title>
             <meta
                name="description"
                content={
                    projets.projectSpecial
                        ? "Découvrez les autres créations de Marion Charbonnier : une sélection de réalisations en graphisme, webdesign, print et communication visuelle."
                        : `Découvrez le projet ${projets.title}, une réalisation présentée dans le portfolio de Marion Charbonnier, graphiste et webdesigner.`
                }
            />
            </Helmet>
            <Canonical url={`/portfolio/projet-${normalizeLabel(projets.title)}`} />
            <section className="projet">
            <BlocTitle title={title} intro='' breadcrumb={projets.title} infoSup={projets.type} />
            <div className='projet__container'>
                {!projets.projectSpecial ?
                <BlocProjetMain projet={projets}/> : 
                <BlocProjetMain projet={projets} alternativeIntro={true} />
                }
                {Object.keys(projets?.allDetailProject ?? {}).length 
                    ? 
                    <>
                    {Object.entries(projets.allDetailProject).map(([key, detail]) => {
                        return (
                        <BlocDetailProject
                            key={key}
                            title={title}
                            detail={detail}
                        />
                        )
                    })
                    }
                    </>
                    : ''
                }
                {!projets.projectSpecial ? 
                <>
                {Object.keys(projets?.miseEnSituation ?? {}).length ?
                projets?.miseEnSituation?.urlVideo.length || projets?.miseEnSituation?.pictures.length ?
                <BlocMiseEnSituation title={title} miseEnSituation={projets.miseEnSituation} />
                :''
                : ''
                }</> : ''}
                <BlocPagination next={urlNext} prev={urlPrev} />
            </div>
            </section>
        </>
    )
}

export default Projet