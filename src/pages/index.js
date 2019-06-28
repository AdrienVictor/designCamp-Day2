import React from "react"
import { graphql } from "gatsby"
import App from "../components/App"

const IndexPage = ({ data }) => {
  return <App data={data}></App>
}

export default IndexPage

export const query = graphql`
  {
    contentfulIndex {
      id
      headerTitle
      headerSubtitle
      headerPill {
        id
        text
        to {
          id
          slug
        }
      }
      headerImage {
        file {
          url
        }
      }
      headerImageAlt
      main {
        __typename
        ... on ContentfulTitlesAndThreeColumns {
          id
          title
          subtitle {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
