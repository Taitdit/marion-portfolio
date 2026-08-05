import { useParams } from "react-router-dom"
import Bloctitle from "../components/BlocTitle";
import { useEffect, useState } from "react";
import BlocProjetMain from "../components/BlocProjetMain";
import BlocProjetDeroule from "../components/BlocProjetDeroule";
import BlocMiseEnSituation from "../components/BlocMiseEnSituation";
import BlocPagination from "../components/BlocPagination";

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
            throw new Error("Projet introuvable");
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
        if(parseInt(parseInt(projets.id)) <= 1) {
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

    if (error) {
        return <p>{error}</p>;
    }

    const title = `Projet : ${projets.title}`
    return (
        <section className="projet">
        <Bloctitle title={title} intro='' breadcrumb={projets.title} infoSup={projets.type} />
        <div className='projet__container'>
            <BlocProjetMain projet={projets}/>
            {Object.keys(projets?.derouleProjet ?? {}).length 
                ? 
                <BlocProjetDeroule title={title} derouleProjet={projets.derouleProjet} />
                : ''
            }
            {Object.keys(projets?.miseEnSituation ?? {}).length ?
            projets?.miseEnSituation?.urlVideo.length || projets?.miseEnSituation?.pictures.length ?
            <BlocMiseEnSituation title={title} miseEnSituation={projets.miseEnSituation} />
            :''
            : ''
            }
            <BlocPagination next={urlNext} prev={urlPrev} />
        </div>
        </section>
    )
}

export default Projet