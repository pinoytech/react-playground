import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Posts = ({ data }) => {
  console.log(data.allMountainDesc.edges[0].node.image)
  return (
    <div>
      {data &&
        data.allMountainDesc.edges.map(({ node: mountain }) => (
          <div key={mountain.title}>
            <h2>{mountain.title}</h2>
            <div>{mountain.description}</div>
          </div>
        ))}
    </div>
  )
}

export const query = graphql`
  query getAllMountains {
    allMountainDesc {
      edges {
        node {
          title
          slug
          image
          description
          height
        }
      }
    }
  }
`

export default Posts
