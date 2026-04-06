import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  twitterHandle?: string;
  schema?: object;
}

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://ais-pre-lxf34zc4gd2r3ldgl2zwbx-199811131034.us-east1.run.app/logo.png',
  twitterHandle = '@retaketec',
  schema
}: SEOProps) {
  const siteTitle = `${title} | Retake Tecnologia & Design`;
  const fullUrl = canonical ? `https://ais-pre-lxf34zc4gd2r3ldgl2zwbx-199811131034.us-east1.run.app${canonical}` : 'https://ais-pre-lxf34zc4gd2r3ldgl2zwbx-199811131034.us-east1.run.app';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
