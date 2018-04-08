import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <About />
    <Posts posts={data.allMediumPost.edges} />
  </div>
)

export const query = graphql`
  query StoriesQuery {
    allMediumPost(limit: 4) {
      edges {
        node {
          id
          title
          virtuals {
            readingTime
            subtitle
            previewImage {
              imageId
            }
            wordCount
          }
        }
      }
    }
  }
`

export default IndexPage
