import { useLocation, Link } from "react-router-dom";
import Arrow from "./svg/Arrow";
import './Breadcrumb.scss'

const breadcrumbNameMap = {
  "/": "Accueil",
  "/portfolio": "Portfolio",
  "/contact": "Contact"
};

const Breadcrumb = ({title}) => {
  const location = useLocation();
  const rawPathnames = location.pathname.split("/").filter(x => x);
  const pathnames = rawPathnames.map(x => decodeURIComponent(x));
  const current = pathnames[pathnames.length - 1];

  return (
    <nav className="breadcrumb">
      <Link to="/">Accueil</Link>
      {pathnames.map((value, index) => {
          const rawTo = "/" + rawPathnames.slice(0, index + 1).join("/");
          const to = rawTo; // lien = version encodée OK
          
        return (
          
          <span key={to}>
          <Arrow />
          {decodeURIComponent(value) === current ? (
            breadcrumbNameMap[to] ||
            (to.startsWith("/portfolio/") ? title : value)
          ) : (
            <Link to={to}>
              {breadcrumbNameMap[to] ||
                (to.startsWith("/portfolio/") ? title : value)}
            </Link>
          )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;