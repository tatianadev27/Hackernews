import { makeExecutableSchemaFromModules } from '../utils/modules'
import auth from './auth'
import interfaces from './interfaces'
import links from './links'

module.exports = makeExecutableSchemaFromModules({
  modules: [
    interfaces,
    auth,
    links
  ]
})
