import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

export function SEO({ title, description, path = "" }: SEOProps) {
  const fullTitle = `${title} | IB Personal Project — Self-Improvement`;
  
  const baseUrl = import.meta.env.VITE_BASE_URL || 
    (typeof window !== "undefined" ? window.location.origin : "");
  
  const hasAbsoluteUrl = baseUrl && (baseUrl.startsWith('http://') || baseUrl.startsWith('https://'));
  const fullUrl = hasAbsoluteUrl ? `${baseUrl}${path}` : "";
  const imageUrl = hasAbsoluteUrl ? `${baseUrl}/favicon.png` : "/favicon.png";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {hasAbsoluteUrl && <link rel="canonical" href={fullUrl} />}
      
      <meta property="og:type" content="website" />
      {hasAbsoluteUrl && <meta property="og:url" content={fullUrl} />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      
      <meta name="twitter:card" content="summary_large_image" />
      {hasAbsoluteUrl && <meta name="twitter:url" content={fullUrl} />}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
