import React from 'react'
import Layout from '../components/Layout'
import Lang from '../components/Header/lang'
import Menu from '../components/Header/menu'
import Header from '../components/AboutPage/Header'
import About from '../components/AboutPage/About'

const AboutPage = ({ pathContext }) => (
  <Layout locale={pathContext.locale}>
    <Lang locale={pathContext.locale} />
    <Menu locale={pathContext.locale} />
    <Header locale={pathContext.locale} />
    <About locale={pathContext.locale} />
  </Layout>
)

export default AboutPage
