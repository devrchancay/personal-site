import React from 'react'
import { graphql} from 'gatsby';
import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'
import Footer from '../components/Footer/index'

const IndexPage = ({ data }) => (
  <Layout>
    <Header />
    <About />
    <Posts posts={data.latestsPosts.edges} />
    <Footer />
  </Layout>
)

export const query = graphql`
  query StoriesQuery {
    latestsPosts: allPost(limit: 4){
      edges{
        node{
          id
          slug
          featuredImage{
            handle
            width
            height
          }
          createdAt
          title
          body
        }
      }
    } 
  }
`

export default IndexPage
