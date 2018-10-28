const generateSlug = function generateSlug(node) {
  const date = new Date(node.createdAt)
  const d = [date.getFullYear(), date.getMonth(), date.getDate()]
  const slug = `/blog/${d[0]}/${d[1]}/${d[2]}/${node.slug}`
  return slug
}

module.exports = { generateSlug }
