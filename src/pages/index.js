import React from 'react'

import Header from '../components/Header'
import About from '../components/About'
import Posts from '../components/Posts'

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <About />
    <Posts posts={data.allMediumPost.edges} />

    <script
      dangerouslySetInnerHTML={{
        __html: `
      <script
        id="fastoryWidgetContainerScript"
        async
        src="https://yam.li/widget/script/tooltip.js"
        data-offset="20"
        data-id="Cw3jpKdE"
    />
          `,
      }}
    />
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
