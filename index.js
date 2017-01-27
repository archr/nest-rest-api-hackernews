const nestApi = require('nest-rest-api')
const routes = require('./routes')

// nest configuration
nestApi.setup({
  workers: 4,
  mongo: {
    db: 'nest-hackernews',
    host: '127.0.0.1',
    port: '27017'
  },
  routes
})

// start server
nestApi.app.listen(3000)
console.log('Nest running on port 3000')
