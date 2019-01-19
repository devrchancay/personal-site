import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'
import Footer from '../components/Footer/index'
import Menu from '../components/Header/menu'
import Lang from '../components/Header/lang'

const IndexPage = ({ pathContext, data, location }) => {
  return (
    <Layout locale={pathContext.locale}>
      <Lang pathname={location.pathname} locale={pathContext.locale} />
      <Menu locale={pathContext.locale} />
      <Header locale={pathContext.locale} />
      <About locale={pathContext.locale} />
      <Posts locale={pathContext.locale} posts={data.allMediumPost.edges} />
      <Footer locale={pathContext.locale} />
    </Layout>
  )
}

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
