import Link from '../../../models/link'

const createLink = async (root, args, context, info) => {
  const { linkInput } = args
  const newLink = new Link(linkInput)
  return await newLink.save()
}

module.exports = createLink
