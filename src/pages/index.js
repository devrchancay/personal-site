import React from 'react'
import { graphql, Link } from 'gatsby';


import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'
import Footer from '../components/Footer/index'



const IndexPage = ({ data, pathContext }) => (
  <Layout locale={pathContext.locale}>
    <ul className="list-reset w-full flex justify-center p-4">
      <li className="p-1">
        <Link className="no-underline hover:no-underline font-black" to="/">EN</Link>
      </li>
      <li className="flex justify-center items-center conten-center"> - </li>
      <li className="p-1">
        <Link className="no-underline hover:no-underline font-black" to="/es">ES</Link>
      </li>
    </ul>
    <Header locale={pathContext.locale} />
    <About locale={pathContext.locale} />
    <Posts locale={pathContext.locale} posts={data.allMediumPost.edges} />
    <Footer locale={pathContext.locale} />
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

export default IndexPage;
