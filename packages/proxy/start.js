const httpProxy = require('http-proxy')
const http = require('http')
const fs = require('fs')

const options = {
  // key: fs.readFileSync('/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem'),
  // cert: fs.readFileSync('/etc/letsencrypt/live/canvasnaweb.com.br/cert.pem'),
}

http
  .createServer(function (req, res) {
    res.writeHead(200)
    res.end('hello world\n')
  })
  .listen(5000)

httpProxy
  .createServer({
    target: {
      host: 'localhost',
      port: 5000,
    },
    ssl: {
      key: fs.readFileSync(
        '/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem',
      ),
      cert: fs.readFileSync(
        '/etc/letsencrypt/live/canvasnaweb.com.br/cert.pem',
      ),
    },
  })
  .listen(443)
