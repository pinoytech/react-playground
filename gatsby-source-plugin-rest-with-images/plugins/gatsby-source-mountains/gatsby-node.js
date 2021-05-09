// if working with the fs, the below node modules help
const path = require("path")
const fs = require("fs-extra")
const fetch = require("node-fetch")
const queryString = require("query-string")

exports.sourceNodes = async (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  // Helper function that processes mountain to match Gatsby's node structure
  const processMountain = mountain => {
    // Destructure from mountain object
    const { slug, title, description, height, image } = mountain

    // Create gatsby node
    const node = {
      slug,
      title,
      description,
      height,
      image,
    }
    const nodeId = createNodeId(`mountain-description-${slug}`)
    const nodeContent = JSON.stringify(node)
    const nodeData = Object.assign({}, node, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `MountainDesc`,
        content: nodeContent,
        contentDigest: createContentDigest(node),
      },
    })
    return nodeData
  }

  // Sample Get countries from JSON
  // const getCountries = () => {
  //   return fs.readJson(path.resolve(__dirname, "./countries.json"))
  // }

  // Get mountains as JSON from REST api
  const getMountains = async () => {
    // Get the options from the plugin if any
    const apiOptions = queryString.stringify(configOptions)
    const apiUrl = `http://api.nuxtjs.dev/posts?${apiOptions}`

    const response = await fetch(apiUrl)
    return response.json()
  }

  const mountains = await getMountains()

  mountains.forEach(mountain => {
    // Convert each currency/rate to a Gatsby Node
    const nodeData = processMountain(mountain)
    // Use Gatsby's createNode helper to create a node from the node data
    createNode(nodeData)
  })
}
