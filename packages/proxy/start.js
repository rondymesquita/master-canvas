const httpProxy = require('http-proxy')
const http = require('http')
const fs = require('fs')

const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'

const webPort = '5005'
const apiPort = '5006'
const api = '/api'

const port = isDev ? 5000 : 443
const isSslEnabled = isDev ? false : true

console.log({ isDev, port, isSslEnabled, env: process.env })

const certs = {
  key: fs.readFileSync(
    '/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem',
    'utf8',
  ),
  ca: fs.readFileSync(
    '/etc/letsencrypt/live/canvasnaweb.com.br/fullchain.pem',
    'utf8',
  ),
  cert: fs.readFileSync(
    '/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem',
    'utf8',
  ),
}

let ssl
if (isSslEnabled) {
  ssl = {
    ...certs,
  }
}

const proxy = httpProxy.createServer({ ssl, secure: false })

http
  .createServer((req, res) => {
    let targetPort = webPort

    if (req.url.startsWith(api)) {
      req.url = req.url.replace(api, '/')
      targetPort = apiPort
    }

    proxy.on('error', function (e) {
      console.error(e)
    })

    proxy.on('proxyReq', function (proxyReq, req, res, options) {
      const { url } = req
      console.log('Request', { url })
    })

    const target = {
      protocol: 'http',
      host: 'localhost',
      port: targetPort,
      ...certs,
    }

    proxy.web(req, res, { target })
  })
  .listen(port)

console.log(`Proxy running on port ${port}`)
