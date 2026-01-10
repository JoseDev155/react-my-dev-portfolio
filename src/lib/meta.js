const metaDescription = 
`Full-Stack Developer Jr and Structural Analyst enthusiast (Civil Engineering) with a passion for creating 
efficient and scalable web applications. Dedicated to continuous learning and professional growth in the tech industry.`;

const metaTag = document.querySelector('meta[name="description"]');

if (metaTag) {
    metaTag.setAttribute('content', metaDescription.trim());
} else {
    const newMetaTag = document.createElement('meta');
    newMetaTag.name = 'description';
    newMetaTag.content = metaDescription.trim();
    document.head.appendChild(newMetaTag);
}