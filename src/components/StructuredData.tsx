import React from 'react';
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LodgingBusiness",
      "@id": "https://gravityhomestays.com/#organization",
      name: "Gravity Homestays",
      description: "Experience luxury that feels like home. Boutique stays crafted with warmth, comfort, and timeless elegance in Visakhapatnam.",
      url: "https://gravityhomestays.com",
      telephone: "+91 8886222497",
      email: "gravityhomestays@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Swarna bharathi, indoor stadium road, Resapuvanipalem, Dwaraka Nagar",
        addressLocality: "Visakhapatnam",
        addressRegion: "Andhra Pradesh",
        postalCode: "530016",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "17.716228",
        longitude: "83.316191"
      },
      priceRange: "₹2,000 - ₹3,000",
      starRating: {
        "@type": "Rating",
        ratingValue: "4.9",
        bestRating: "5"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1"
      },
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "High-Speed WiFi"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Elevator"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Parking"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "TV"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "AC"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Geyser"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Kitchen Facilities"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "24/7 CCTV"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Power Back Up"
        }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Room Types",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LodgingReservation",
              name: "Deluxe Room",
              description: "Spacious and elegantly designed room with premium amenities for a luxurious experience.",
              price: "3000",
              priceCurrency: "INR",
              accommodationType: "Room"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LodgingReservation",
              name: "Executive Room",
              description: "Sophisticated and comfortable room featuring dedicated work space and upscale furnishings.",
              price: "3500",
              priceCurrency: "INR",
              accommodationType: "Room"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LodgingReservation",
              name: "Suite Room",
              description: "Lavish suite featuring a private lounge, plush master bedroom, and premium hospitality.",
              price: "4500",
              priceCurrency: "INR",
              accommodationType: "Room"
            }
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "LodgingReservation",
              name: "2BHK",
              description: "Fully furnished two-bedroom apartment with living hall and kitchen, ideal for families.",
              price: "6000",
              priceCurrency: "INR",
              accommodationType: "Suite"
            }
          }
        ]
      },
      sameAs: [
        "https://www.facebook.com/people/Gravity-homestays/61592655687621/?sk=directory_links",
        "https://www.instagram.com/gravityhomestays_888/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://gravityhomestays.com/#website",
      url: "https://gravityhomestays.com",
      name: "Gravity Homestays",
      description: "Luxury boutique homestays in Visakhapatnam",
      publisher: {
        "@id": "https://gravityhomestays.com/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://gravityhomestays.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://gravityhomestays.com"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Rooms",
          item: "https://gravityhomestays.com#rooms"
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Amenities",
          item: "https://gravityhomestays.com#amenities"
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Gallery",
          item: "https://gravityhomestays.com#gallery"
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Reviews",
          item: "https://gravityhomestays.com#reviews"
        },
        {
          "@type": "ListItem",
          position: 6,
          name: "Contact",
          item: "https://gravityhomestays.com#contact"
        }
      ]
    }
  ]
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
