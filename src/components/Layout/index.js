import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children, locale }) => (
  <div>
    
    <Helmet
      title="Ramón Chancay (devrchancay) | Front-end Developer"
      meta={[
        {
          name: 'description',
          content:
            'Front-end web Developer, en Guayaquil, Ecuador',
        },
      ]}
      link={[{
        rel: 'alternate',
        hreflang: locale ==='es' ? 'en': 'es',
        href:`https://ramonchancay.me/${locale === 'es' ? '' : 'es'}`
      }]}
    />

    <div>{children}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.array,
}

export default TemplateWrapper
