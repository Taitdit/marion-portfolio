import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../config/site";

const Canonical = ({ url = "" }) => {
    const domain = SITE_URL;

    return (
        <Helmet>
            <link
                rel="canonical"
                href={`${domain}${url}`}
            />
        </Helmet>
    );
};

export default Canonical;