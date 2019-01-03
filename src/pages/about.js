import React from 'react'
import Layout from '../components/Layout'
import Lang from '../components/Header/lang'
import Menu from '../components/Header/menu'
import HeaderAbout from '../components/HeaderAbout'

const AboutPage = ({ pathContext }) => (
  <Layout locale={pathContext.locale}>
    <Lang locale={pathContext.locale} />
    <Menu locale={pathContext.locale} />
    <HeaderAbout locale={pathContext.locale} />
  </Layout>
)

export default AboutPage
