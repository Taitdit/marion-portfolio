import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Arrow from "./svg/Arrow"

const BlocPagination = ({next, prev}) => {

    
  

    return (
        <div className="projet__pagination">
            <div className="projet__pagination--container">
                <Link className="projet__pagination--btn prev" to={`/portfolio/${prev}`} ><Arrow /><span>Projet précédent</span></Link>
                <Link className="projet__pagination--btn next" to={`/portfolio/${next}`} ><span>Projet suivant</span><Arrow /></Link>
            </div>
        </div>
    )
}
export default BlocPagination