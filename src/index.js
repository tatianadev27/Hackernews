import app from './app'
import throng from 'throng'
import mongoose from 'mongoose'
import config from '../config'
const url = require('url')

const mongoHost = new url.URL(config.MONGODB_URI).host
app.get('/', (request, response) => {
  response.json({
    message: 'Hello, app graphql and node'
  })
})
const startServer = async function () {
  const mongooseOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    promiseLibrary: global.Promise
  }
  try {
    await Promise.all([
      mongoose.connect(config.MONGODB_URI, mongooseOptions),
      app.listen(config.PORT)
    ]).then(() => {
      // eslint-disable-next-line no-console
      console.log(`Server has started on port: ${config.PORT}, connected to mongo at ${mongoHost}`)
    })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Could not start the app: ', error)
  }
}
throng({
  workers: config.WORKERS,
  lifetime: Infinity
}, startServer)
