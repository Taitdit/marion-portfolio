import fs from "fs";
import path from "path";

const SITE_URL = "https://marioncharbonnier.fr";

const normalizeLabel = (label) => {
    return label
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/\//g, "");
};

const portfolioPath = path.resolve("public/portfolio.json");
const sitemapPath = path.resolve("public/sitemap.xml");

const portfolio = JSON.parse(
    fs.readFileSync(portfolioPath, "utf-8")
);

// Pages fixes que l'on souhaite indexer
const staticPages = [
    "/",
    "/portfolio",
    "/contact",
];

// Pages des projets
const projectPages = portfolio.map((project) => {
    return `/portfolio/projet-${normalizeLabel(project.title)}`;
});

const pages = [
    ...staticPages,
    ...projectPages,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
    .map(
        (page) => `    <url>
        <loc>${SITE_URL}${page}</loc>
    </url>`
    )
    .join("\n")}
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemap, "utf-8");

console.log(`Sitemap généré : ${pages.length} URLs`);