"use client";

import { usePathname } from "next/navigation";

export const StructuredData = () => {
  const pathname = usePathname();

  const baseUrl = "https://nexus-events.ru";

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "NEXUS Event Space",
    "description": "Многофункциональное пространство для проведения мероприятий в центре Санкт-Петербурга",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Конюшенная площадь, 2Ж",
      "addressLocality": "Санкт-Петербург",
      "addressRegion": "СПб",
      "postalCode": "191186",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-921-410-44-40",
      "contactType": "customer service",
      "email": "info@nexus-events.ru"
    },
    "sameAs": [
      "https://t.me/nexusspb"
    ]
  };

  const placeData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": "NEXUS Event Space",
    "description": "800 м² многофункционального пространства для мероприятий",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Конюшенная площадь, 2Ж",
      "addressLocality": "Санкт-Петербург",
      "addressRegion": "СПб",
      "postalCode": "191186",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 59.939212,
      "longitude": 30.326028
    },
    "telephone": "+7-921-410-44-40",
    "email": "info@nexus-events.ru",
    "url": baseUrl
  };

  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NEXUS Event Space",
    "description": "Аренда многофункционального пространства для мероприятий в центре Санкт-Петербурга",
    "url": baseUrl,
    "telephone": "+7-921-410-44-40",
    "email": "info@nexus-events.ru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Конюшенная площадь, 2Ж",
      "addressLocality": "Санкт-Петербург",
      "addressRegion": "СПб",
      "postalCode": "191186",
      "addressCountry": "RU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 59.939212,
      "longitude": 30.326028
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "description": "Доступно для аренды по предварительной записи"
    },
    "priceRange": "$$",
    "image": `${baseUrl}/og-image.jpg`
  };

  const structuredData: any[] = [organizationData, placeData, localBusinessData];

  if (pathname === '/') {
    const websiteData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "NEXUS Event Space",
      "url": baseUrl,
      "description": "Официальный сайт NEXUS Event Space - аренда пространства для мероприятий в Санкт-Петербурге",
      "inLanguage": "ru-RU",
      "copyrightHolder": {
        "@type": "Organization",
        "name": "NEXUS Event Space"
      },
      "potentialAction": {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/contact`
        }
      }
    };
    structuredData.push(websiteData);
  }

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data, null, 2)
          }}
        />
      ))}
    </>
  );
};
