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
