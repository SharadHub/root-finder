export default function sitemap() {
  const baseUrl = 'https://rootfinder.vercel.app'; // Placeholder domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/admin`,
      lastModified: new Date(),
    },
  ];
}
