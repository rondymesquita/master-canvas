const httpProxy = require('http-proxy')
const http = require('http')
const fs = require('fs')

const isProd =
  process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production'

const proxy = httpProxy.createServer()

const webUrl = 'http://localhost:5005'
const apiUrl = 'http://localhost:5006'
const api = '/api'

const port = isProd ? 5000 : 5000
const isSslEnabled = isProd ? true : false

console.log({ isProd, port, isSslEnabled, env: process.env })

http
  .createServer((req, res) => {
    let target = webUrl

    let ssl
    if (isSslEnabled) {
      ssl = {
        key: fs.readFileSync(
          '/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem',
          'utf8',
        ),
        cert: fs.readFileSync(
          '/etc/letsencrypt/live/canvasnaweb.com.br/fullchain.pem',
          'utf8',
        ),
      }
    }

    if (req.url.startsWith(api)) {
      req.url = req.url.replace(api, '/')
      target = apiUrl
    }

    proxy.on('error', function (e) {
      console.error(e)
    })

    proxy.on('proxyReq', function (proxyReq, req, res, options) {
      const { url } = req
      console.log('Request', { url })
    })

    proxy.web(req, res, { target, ssl })
  })
  .listen(port)

console.log(`Proxy running on port ${port}`)
