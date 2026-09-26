import { SITE_URL, site } from "@/lib/site";

/** Структурированные данные для поисковиков: ресторан, адрес, телефон */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: site.name,
    url: SITE_URL,
    telephone: site.phoneE164,
    image: `${SITE_URL}/images/interior/hero-atmosphere.jpg`,
    servesCuisine: "Домашняя кухня",
    hasMenu: `${SITE_URL}/menu`,
    acceptsReservations: "True",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.addressShort,
      addressLocality: "Сочи",
      addressRegion: "Краснодарский край",
      postalCode: site.postalCode,
      addressCountry: "RU",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.lat, longitude: site.lon },
    hasMap: site.gis,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
