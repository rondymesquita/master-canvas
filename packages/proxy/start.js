const httpProxy = require('http-proxy')
const https = require('https')
const fs = require('fs')

const options = {
  key: fs.readFileSync('/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/canvasnaweb.com.br/cert.pem'),
}

const webPort = '5005'
const apiPort = '5006'
const apiPath = '/api'
const host = '127.0.0.1'

const proxy = httpProxy.createProxyServer({})

const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'

const port = isDev ? 5000 : 443
console.log({ isDev, port })

const server = https.createServer(options, function (req, res) {
  if (req.url.startsWith(apiPath)) {
    proxy.web(req, res, { target: `http://${host}:${webPort}` })
  } else {
    proxy.web(req, res, { target: `http://${host}:${apiPort}` })
  }
})

server.listen(port)
