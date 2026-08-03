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
        latitude: "17.731956",
        longitude: "83.315565"
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
          name: "In-Room Dining"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "24/7 Security"
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Concierge Service"
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
              name: "Normal Room",
              description: "Comfortable and cozy room perfect for a relaxing stay with all essential amenities.",
              price: "2000",
              priceCurrency: "INR",
              accommodationType: "Room"
            }
          },
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
          }
        ]
      },
      sameAs: [
        "https://www.facebook.com/gravityhomestays",
        "https://www.instagram.com/gravityhomestays"
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
