import Link from '../../../models/link'

const createLink = async (_, { linkInput }, { user }) => {
  const newLink = new Link(linkInput)
  return await newLink.save()
}

module.exports = createLink
