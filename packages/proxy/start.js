const httpProxy = require('http-proxy')
const https = require('https')
const fs = require('fs')

const options = {
  // key: fs.readFileSync('/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem'),
  // cert: fs.readFileSync('/etc/letsencrypt/live/canvasnaweb.com.br/cert.pem'),
}

https
  .createServer(options, function (req, res) {
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
