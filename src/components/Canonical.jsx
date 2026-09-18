import { Helmet } from "react-helmet-async";

const Canonical = ({ url = "" }) => {
    const domain = "https://marioncharbonnier.fr";

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