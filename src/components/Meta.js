import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        description
        canonicalLink
      }
    }
  }
`

export default class Meta extends Component {
  render() {
    const {
      title,
      url,
      description,
      absoluteImageUrl = '',
      twitterSiteAccount,
      twitterCreatorAccount,
      canonicalLink,
      siteTitle,
      siteDescription,
      googleTrackingId='UA-182855928-2',
     
      // overwrite { title, description } if in fields or fields.meta
    } = this.props

    return (
      <Helmet>
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {description && <meta name="description" content={description} />}
        {description && <meta property="og:description" content={description} />}
        {canonicalLink && <meta property="og:type" content="website" />}
        {canonicalLink && <meta property="og:url" content={canonicalLink} />}
        {canonicalLink && <meta name="twitter:site" content={canonicalLink} />}
        {canonicalLink && <link rel="canonical" href={canonicalLink} />}

        <meta property="og:locale" content="sv_SE" />
        <meta property="og:site_name" content={siteTitle} />
        {description && <meta property="twitter:description" content={description} />}
        
        {title && <meta property="twitter:title" content={title} />}
        <meta name="twitter:image" content={absoluteImageUrl} />
        <meta property="og:image:secure_url" content={absoluteImageUrl} />
        <meta property="og:image" content={absoluteImageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="geo.region" content="SE" /> 
        <meta name="geo.placename" content="Helsingborg" />
        <meta name="geo.position" content="56.046648;12.690774" />
        <meta name="ICBM" content="56.046648, 12.690774" />

        <meta name="google-site-verification" content="pOGe1T83kU7OVdDrqaYmK22Y-GGcWBOVH1ayh978AAM" />

        <script type="application/ld+json">{`

{
  "@context": "https://schema.org",
  "@graph": [
       {
    "@type": "WebPage",
    "@id": "https://xn--flyttstdning-helsingborg-wbc.nu/#",
    "url": "https://xn--flyttstdning-helsingborg-wbc.nu/",
    "name": "Flyttstädning Helsingborg -Boka städfirma online idag",
    "description": "Fyttstädning Helsingborg -en pålitlig städfirma med personal du kan lita på ✔️. Vi erbjuder fasta priser och städgaranti ✔️. Boka oss eller begär en offert enkelt online eller via telefon ✔️.",
    "inLanguage": "sv-SE"
    },
    {
        "@type": "LocalBusiness",
        "name": "Flyttstädning Helsingborg",
        "image": "https://xn--flyttstdning-helsingborg-wbc.nu/images/logo.png",
        "@id": "https://xn--flyttstdning-helsingborg-wbc.nu/#",
        "url": "https://xn--flyttstdning-helsingborg-wbc.nu/",
        "telephone": "073 637 99 08",
        "priceRange": "$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Badhusgatan 2",
          "addressLocality": "Helsingborg",
          "postalCode": "25221",
          "addressCountry": "SE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 56.0466408,
          "longitude": 12.6908438
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        } 
      }
 
      
  ]
}

`}</script>




        {/* <script type="application/ld+json">{`
       {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://xn--flyttstdning-helsingborg-wbc.nu/",
        "url": "https://xn--flyttstdning-helsingborg-wbc.nu/",
        "isPartOf": {"@id": "https://xn--flyttstdning-helsingborg-wbc.nu/#"},
        "name": "Flyttstädning Helsingborg -Boka städfirma online idag",
        "description": "Fyttstädning Helsingborg -en pålitlig städfirma med personal du kan lita på ✔️. Vi erbjuder fasta priser och städgaranti ✔️. Boka oss eller begär en offert enkelt online eller via telefon ✔️.",
        "inLanguage": "sv-SE"
        }
        `}
        </script> */}
{/*         
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Flyttstädning Helsingborg",
            "image": "https://xn--flyttstdning-helsingborg-wbc.nu/images/logo.png",
            "@id": "https://xn--flyttstdning-helsingborg-wbc.nu/#",
            "url": "https://xn--flyttstdning-helsingborg-wbc.nu/",
            "description": "Fyttstädning Helsingborg -en pålitlig städfirma med personal du kan lita på ✔️. Vi erbjuder fasta priser och städgaranti ✔️. Boka oss eller begär en offert enkelt online eller via telefon ✔️.",
            "telephone": "073 637 99 08",
            "priceRange": "$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Badhusgatan 2",
              "addressLocality": "Helsingborg",
              "postalCode": "25221",
              "addressCountry": "SE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 56.0466408,
              "longitude": 12.6908438
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "08:00",
              "closes": "18:00"
            } 
          }
        `}</script> */}
       {googleTrackingId && (
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`}
          />
        )}

        {googleTrackingId && (
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleTrackingId}');
            `}
          </script>
        )}
      </Helmet>
    )
  }
}
