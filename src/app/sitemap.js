export default function sitemap() {
    const baseUrl = "https://vechnost-2024.vercel.app";

    const routes = [
        "",
        "/kontakt",
        "/kremacii-sofia",
        "/pogrebalni-uslugi-sofia",
        "/transport-pokoinici",
        "/kamenodelski-uslugi",
        "/pochistvane-sled-smart",
        "/traurni-artikuli",
        "/za-nas"
    ];

    const staticPages = routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: route === "" ? 1.0 : 0.8,
    }));

    return staticPages;
}