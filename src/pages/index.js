import React from 'react'
import { graphql, Link } from 'gatsby';


import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'
import Footer from '../components/Footer/index'



const IndexPage = ({ data, pathContext }) => (
  <Layout locale={pathContext.locale}>

    <ul className="list-reset w-full flex justify-center bg-blue">
    {pathContext.locale === 'es' && (
      <li className="p-1">
        <Link className="text-2xl no-underline hover:no-underline font-black" to="/">
        <span aria-label="English version">🇺🇸</span> <span className="text-white">English Version</span>
        </Link>
      </li>
    )}
      {pathContext.locale === 'en' && (
      <li className="p-1">
        <Link className="text-2xl no-underline hover:no-underline font-black" to="/es">
          <span aria-label="Spanish version">🇪🇸</span> <span className="text-white">Version en español</span>
        </Link>
      </li>
    )}
    
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
