import React from 'react'
import GraphImage from 'graphcms-image'
import ReactMarkdown from 'react-markdown'
import './post.css'

const Post = ({ pageContext }) => (
  <div>
    <GraphImage image={pageContext.node.featuredImage} />
    <div className="flex justify-center flex-col justify-center content-center items-center">
      <div className="w-full md:w-2/3 p-4 md:py-8" data-id="ramon-chancay-post">
        <h1 className="text-left">{pageContext.node.title}</h1>
        <ReactMarkdown source={pageContext.node.body} />
      </div>
    </div>
  </div>
)

export default Post
