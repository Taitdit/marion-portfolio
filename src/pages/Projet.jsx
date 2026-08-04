import { useParams } from "react-router-dom"
import Bloctitle from "../components/BlocTitle";
import { useEffect, useState } from "react";
import BlocProjetMain from "../components/BlocProjetMain";

const Projet = () => {
    const { url } = useParams();
    const [projets, setProjets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

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

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const title = `Projet : ${projets.title}`

    return (
        <>
        <Bloctitle title={title} intro='' breadcrumb={projets.title} infoSup={projets.type} />
        <div className='portfolio__container'>
            <BlocProjetMain projet={projets}/>
        </div>
        </>
    )
}

export default Projet