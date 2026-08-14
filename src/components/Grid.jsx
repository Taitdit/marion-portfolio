import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Grid.scss'
import FilterIcon from "./svg/FilterIcon";
import GridIcon from "./svg/GridIcon";


const Grid = () => {
    const [resultsJson, setResultJson] = useState([]);
    const [filterActif, setFilterActif] = useState([]);
    const [project, setProject] = useState([]);
    const [burgerFilterState, setBurgerFilterState] = useState(false)

    useEffect(() => {
    fetch("/portfolio.json")
      .then(res => res.json())
      .then(data => setResultJson(data));
    }, []);
  
   const arrayFilter = [
        ...new Set(
            resultsJson
            .flatMap((project) =>
                Array.isArray(project.type)
                ? project.type
                : [project.type]
            )
            .filter(Boolean)
        ),
    ];


    useEffect(() => {
        if(!filterActif.length) {
            setProject(resultsJson)
        } else {
                const filteredProjects = resultsJson.filter((item) => {
                    const projectTypes = Array.isArray(item.type)
                    ? item.type
                    : [item.type];
                    const normalizedTypes = projectTypes.map((type) => normalizeLabel(type))
                    return filterActif.every((activeFilter) => normalizedTypes.includes(activeFilter))
                    
                })
                setProject(filteredProjects);
        }

    }, [filterActif, resultsJson])
    
    const normalizeLabel = (label) => {
        return label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/\//g, "");
    };


    const filter = (label) => {
        if (label === "all") {
        setFilterActif([]);
        return;
        }

        setFilterActif((previousFilterActif) =>
        previousFilterActif.includes(label)
            ? previousFilterActif.filter(
                (activeFilter) => activeFilter !== label
            )
            : [...previousFilterActif, label]
        );
    };
    
    return (
        <div className="grid">
            <div className="grid__filter">
                <button className='cta__filter allFilter mob' disabled={!filterActif.length} onClick={() => filter('all')} type="button">
                    <GridIcon />
                    <span>Tous les projets</span>
                </button>
                <button className={`cta__burgerFilter ${burgerFilterState ? 'active' : ''}`} onClick={() => setBurgerFilterState(!burgerFilterState)} role="button">
                       <FilterIcon /> 
                </button>
                <div className={`grid__filter--withoutall--container ${burgerFilterState ? 'active' : ''}`}>

                    
                    <div className={`grid__filter--withoutall ${burgerFilterState ? 'active' : ''}`}>
                    <button className='cta__filter allFilter desk' disabled={!filterActif.length} onClick={() => filter('all')} type="button">
                        <GridIcon />
                        <span>Tous les projets</span>
                    </button>
                    {arrayFilter.map((filterName, index) => {
                        const imageNumber = (index % 4) + 1;
                        const labelShort = normalizeLabel(filterName);
                        
                        return ( 
                        
                            <button 
                            key={filterName}
                            className={`cta__filter ${filterActif.includes(labelShort) ? 'active' : ''}`} 
                            onClick={() => filter(labelShort)}  
                            type="button">
                                <img src={`/img/potion-${imageNumber}.webp`} alt={filterName} /> 
                                <span>{filterName}</span>
                            </button>
                        )
                    })}
                    </div>
                </div>
            </div>
            {project.length ?
            <div className="grid__container">
                 {project.map((item) => {
                    const arrayType = item.type
                    return (
                        <Link key={item.title} to={`/portfolio/projet-${normalizeLabel(item.title)}`} className="project">
                            <div className="project__img">
                                <img src={`/img/${normalizeLabel(item.title)}.webp`} alt={`${item.title} - Marion Charbonnier`}/>
                                <div className="project__type">
                                    {arrayType.map((type) => 
                                        <div key={type} className={`project__type--button ${filterActif.includes(normalizeLabel(type)) ? 'active' : ''}`}>{type}</div>
                                    )
                                    
                                    }
                                </div>
                            </div>
                            <div className="project__infos">
                                <div className="project__infos--txt">
                                    <h2>{item.title}</h2>
                                    <p>{item.smallDescription}</p>
                                </div>
                                <div className="cta__primary specialCard"><span>Voir le projet</span><img src="/img/btnArrow.webp" alt="fleche bouton" /></div>
                            </div>
                        </Link>
                    )
                })}
            </div> : 
            <div className="noproject">
                <h2>Aucun projet ne correspond à cette combinaison de filtres... pour le moment ! 😉</h2>
                <p>N'hésitez pas à <button onClick={() => filter('all')} role="button">réinitialiser les filtres</button> pour découvrir l'ensemble de mes réalisations ou à me <Link to='/contact'>contacter</Link> si votre projet sort des sentiers battus.</p>
            </div> }
        </div>
  )
}
  export default Grid