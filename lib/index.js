import http from 'http'
import app from './app'

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

const onListening = () => {
  const addr = server.address()
  const bind = 'port ' + addr.port

  console.log('Listening on ' + bind)
}

const port = process.env.PORT || '3000'

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)
