import Link from '../../../models/link'
const { ApolloError } = require('apollo-server-express')

const links = async (_, args) => {
  const links = await Link.find()
  if (!links) {
    throw new ApolloError('Not found')
  }
  return links
}

module.exports = links
