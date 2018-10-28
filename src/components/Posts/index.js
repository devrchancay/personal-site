import React from 'react'
import GraphImg from 'graphcms-image'
import helpers from '../../../helpers'

const Posts = ({ posts }) => (
  <div className="flex flex-col justify-center items-center content-center py-8 md:w-full">
    <div className="container">
      <h2 className="font-sans font-bold text-center md:text-left text-gray-primary mx-2">
        Ultimos posts
      </h2>
    </div>

    <div className="container flex flex-col sm:justify-center md:flex-row items-center">
      {posts.map(post => (
        <div
          key={post.node.id}
          className="flex flex-col mx-2 my-6 pb-3  w-5/6 md:w-1/3 relative border post-box"
        >
          <a
            href={helpers.generateSlug(post.node)}
            rel="noopener noreferrer"
            className="no-underline text-gray-primary"
          >
            <div>
              <GraphImg
                image={post.node.featuredImage}
                width={300}
                maxWidth={350}
                maxHeight={150}
                className="w-full"
              />
            </div>
            <div>
              <h4 className="font-sans font-bold px-2 py-4">
                {post.node.title}
              </h4>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
)

export default Posts
