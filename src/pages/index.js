import React from 'react'

import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'
import Footer from '../components/Footer/index'

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <About />
    <Posts posts={data.allMediumPost.edges} />
    <Footer />
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
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`

export default IndexPage
