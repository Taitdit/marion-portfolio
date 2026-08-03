import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './Grid.scss'


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
                    return filterActif.some((activeFilter) => normalizedTypes.includes(activeFilter))
                    
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
                <button className='cta__filter allFilter__mob' disabled={!filterActif.length} onClick={() => filter('all')} type="button">
                    <span>Tous les projets</span>
                </button>
                
                <div className='grid__filter--withoutall--container'>

                    <button className={`cta__burgerFilter ${burgerFilterState ? 'active' : ''}`} onClick={() => setBurgerFilterState(!burgerFilterState)} role="button">r</button>
                    <div className={`grid__filter--withoutall ${burgerFilterState ? 'active' : ''}`}>
                    <button className='cta__filter allFilter__desk' disabled={!filterActif.length} onClick={() => filter('all')} type="button">
                        <span>Tous les projets</span>
                    </button>
                    {arrayFilter.map((filterName) => {
                        
                        const labelShort = normalizeLabel(filterName);
                        
                        return ( 
                        
                            <button 
                            key={filterName}
                            className={`cta__filter ${filterActif.includes(labelShort) ? 'active' : ''}`} 
                            onClick={() => filter(labelShort)}  
                            type="button">
                                <img src={`/img/filter-${labelShort}.png`} alt={filterName} /> 
                                <span>{filterName}</span>
                            </button>
                        )
                    })}
                    </div>
                </div>
            </div>
            <div className="grid__container">
                {project.map((item) => {
                    const arrayType = item.type
                    return (
                        <div className="project">
                            <div className="project__img">
                                <img src={`./img/${normalizeLabel(item.title)}.png`} alt={item.title}/>
                                {arrayType.map((type) => 
                                    <div key={type} className={`project__type ${filterActif.includes(normalizeLabel(type)) ? 'active' : ''}`}>{type}</div>
                                )
                                
                                }
                            </div>
                            <div className="project__infos">
                                <div className="project__infos--txt">
                                    <h2>{item.title}</h2>
                                    <p>{item.smallDescription}</p>
                                </div>
                                <Link className="cta__primary" to={`/portfolio/projet-${item.id}-${normalizeLabel(item.title)}`} ><span>Voir le projet</span></Link>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
  )
}
  export default Grid