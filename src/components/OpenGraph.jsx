import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../config/site";

const OpenGraph = ({
    title,
    description,
    url = "",
    image = "/img/og.webp"
}) => {
    const domain = SITE_URL;

    const pageUrl = `${domain}${url}`;
    const imageUrl = `${domain}${image}`;

    return (
        <Helmet>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:image" content={imageUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:locale" content="fr_FR" />
        </Helmet>
    );
};

export default OpenGraph;