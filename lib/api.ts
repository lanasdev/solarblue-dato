import { gql } from 'graphql-request'
import { responsiveImageFragment } from 'lib/fragments'

import request from './datocms'

const API_URL = 'https://graphql.datocms.com'
const API_TOKEN = process.env.DATOCMS_API_TOKEN

export const getHome = async (preview: boolean) => {
  const HomeQuery = gql`
    query HomeQuery {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          facebookPageUrl
          fallbackSeo {
            description
            title
            twitterCard
            image {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      home {
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
        inhalt {
          __typename
          ... on HeroRecord {
            id
            titel
            untertitel
            bild {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
          ... on LeistungsektionRecord {
            id
            titel
            leistungenliste {
              id
              titel
              beschreibung
              icon
              slug
            }
          }
          ... on TeamsektionRecord {
            id
            titel
            text
            bild {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
          ... on FaktensektionRecord {
            id
            fakten {
              id
              text
              beschreibung
            }
          }
          ... on ProjektesektionRecord {
            id
            titel
            gallerie {
              slug
              titel
              typ {
                titel
                slug
              }
              bild {
                responsiveImage(imgixParams: { auto: format }) {
                  ...responsiveImageFragment
                }
              }
            }
          }
          ... on CtabreitRecord {
            id
            titel
            beschreibung
          }
          ... on TestimonialsektionRecord {
            id
            titel
            testimonialliste {
              id
              name
              text
            }
          }
          ... on BlogsektionRecord {
            id
            titel
            beschreibung
            blogliste {
              titel
              beschreibung
              author {
                name
                profilbild {
                  responsiveImage(imgixParams: { auto: format }) {
                    ...responsiveImageFragment
                  }
                }
              }
              slug
              bild {
                responsiveImage(imgixParams: { auto: format }) {
                  ...responsiveImageFragment
                }
              }
            }
          }
          ... on KontaktsektionRecord {
            id
            titel
            beschreibung
            gallerie {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      einstellungen {
        logo {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
        social {
          email
          telefonnummer
          adresse
          instagram
          twitter
          youtube
        }
      }
    }
    ${responsiveImageFragment}
  `

  const graphqlRequest = {
    query: HomeQuery,
    variables: {},
    includeDrafts: preview,
    excludeInvalid: true,
  }

  return {
    subscription: preview
      ? {
          ...graphqlRequest,
          initialData: await request(graphqlRequest),
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }
      : {
          enabled: false,
          initialData: await request(graphqlRequest),
        },
  }
}

// Leistungen

export const getAllLeistungen = async (preview: boolean) => {
  const AllLeistungenQuery = gql`
    query AllLeistungenQuery {
      allLeistungs {
        slug
      }
    }
  `
  const graphqlRequest = {
    query: AllLeistungenQuery,
    variables: {},
    includeDrafts: preview,
    excludeInvalid: true,
  }

  const data = await request(graphqlRequest)

  return data.allLeistungs
}

export const getLeistungBySlug = async (slug: string, preview: boolean) => {
  const LeistungBySlugQuery = gql`
    query LeistungBySlugQuery($slug: String!) {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          facebookPageUrl
          fallbackSeo {
            description
            title
            twitterCard
            image {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      leistung(filter: { slug: { eq: $slug } }) {
        slug
        titel
        beschreibung
        icon
        text {
          blocks
          links
          value
        }
        bild {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
        projekte {
          slug
          titel
          beschreibung
          zeitraum {
            start
            ende
          }
          ortsname
          bild {
            responsiveImage(imgixParams: { auto: format }) {
              ...responsiveImageFragment
            }
          }
        }
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      home {
        inhalt {
          __typename
          ... on KontaktsektionRecord {
            id
            titel
            beschreibung
            gallerie {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      einstellungen {
        logo {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `
  const graphqlRequest = {
    query: LeistungBySlugQuery,
    variables: { slug },
    includeDrafts: preview,
    excludeInvalid: true,
  }

  return {
    subscription: preview
      ? {
          ...graphqlRequest,
          initialData: await request(graphqlRequest),
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }
      : {
          enabled: false,
          initialData: await request(graphqlRequest),
        },
  }
}

// Projects

export const getAllProjects = async (preview: boolean) => {
  const AllProjectsQuery = gql`
    query AllProjectsQuery {
      allProjekts(orderBy: _firstPublishedAt_DESC) {
        slug
      }
    }
  `
  const graphqlRequest = {
    query: AllProjectsQuery,
    variables: {},
    includeDrafts: preview,
    excludeInvalid: true,
  }
  const data = await request(graphqlRequest)

  return data.allProjekts
}

export const getProjectBySlug = async (slug: string, preview: boolean) => {
  const ProjectBySlugQuery = gql`
    query ProjectBySlugQuery($slug: String!) {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
        globalSeo {
          siteName
          titleSuffix
          twitterAccount
          facebookPageUrl
          fallbackSeo {
            description
            title
            twitterCard
            image {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      projekt(filter: { slug: { eq: $slug } }) {
        slug
        createdAt
        titel
        beschreibung
        typ {
          slug
          titel
          icon
        }
        text {
          blocks
          links
          value
        }
        koordinaten {
          latitude
          longitude
        }
        bild {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
        projektstart
        ortsname
        kwp
        stromersparnisprojahr
        zeitraum {
          start
          ende
        }

        gallerie {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
        seo: _seoMetaTags {
          attributes
          content
          tag
        }
      }
      home {
        inhalt {
          __typename
          ... on KontaktsektionRecord {
            id
            titel
            beschreibung
            gallerie {
              responsiveImage(imgixParams: { auto: format }) {
                ...responsiveImageFragment
              }
            }
          }
        }
      }
      einstellungen {
        logo {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `
  const graphqlRequest = {
    query: ProjectBySlugQuery,
    variables: { slug },
    includeDrafts: preview,
    excludeInvalid: true,
  }
  return {
    subscription: preview
      ? {
          ...graphqlRequest,
          initialData: await request(graphqlRequest),
          token: process.env.NEXT_DATOCMS_API_TOKEN,
        }
      : {
          enabled: false,
          initialData: await request(graphqlRequest),
        },
  }
}
