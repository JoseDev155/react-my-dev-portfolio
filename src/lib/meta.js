// Define the meta description content
const metaDescription = 
`Full-Stack Developer Jr and Structural Analyst enthusiast (Civil Engineering) with a passion for creating 
efficient and scalable web applications.`;

const metaTag = document.querySelector('meta[name="description"]');

if (metaTag) {
    metaTag.setAttribute('content', metaDescription.trim());
} else {
    const newMetaTag = document.createElement('meta');
    newMetaTag.name = 'description';
    newMetaTag.content = metaDescription.trim();
    document.head.appendChild(newMetaTag);
}

// Define the canonical URL
const canonicalURL = 'https://imjoseramos.dev';

const canonicalLink = document.querySelector('link[rel="canonical"]');

if (canonicalLink) {
    canonicalLink.setAttribute('href', canonicalURL);
} else {
    const newCanonicalLink = document.createElement('link');
    newCanonicalLink.rel = 'canonical';
    newCanonicalLink.href = canonicalURL;
    document.head.appendChild(newCanonicalLink);
}