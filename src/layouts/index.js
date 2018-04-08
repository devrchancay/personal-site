import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ramón Chancay (devrchancay) | Full Stack Developer"
      meta={[
        {
          name: 'description',
          content:
            'Desarrollador Web Full stack, en Guayaquil, Ecuador. Disponible para contratos freelancer.',
        },
      ]}
    />

    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
