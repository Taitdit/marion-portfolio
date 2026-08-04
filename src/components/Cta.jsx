import { Link } from "react-router-dom";

const Cta = ({label, picto, withPicto, url, targetBlank, type}) => {
    const wichPicto = !picto && `no-picture`
    return (
        <>
        {!targetBlank ? 
        <Link to={url} className={`cta__${type}`}>
            {withPicto ? <img src={`./img/${wichPicto}.webp`} alt={`Picto de ${label}`} />: ''}<span>{label}</span>
        </Link>
        :
            <a href={url} title={label} className={`cta__${type}`}>{label}</a>
        }
        </>

    )
}

export default Cta