import React from 'react'

import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'
import Footer from '../components/Footer/index'

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
    <About />
    <Posts posts={data.allMediumPost.edges} />
    <Footer />
  </Layout>
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
