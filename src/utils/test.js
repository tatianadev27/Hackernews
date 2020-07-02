import request from 'supertest'
import app from '../app'

const graphQLRequest = ({ query, variables = null }) => {
  return request(app)
    .post('/')
    .send({
      variables,
      query
    })
}

module.exports = {
  request: graphQLRequest
}
