const httpProxy = require('http-proxy')
const http = require('http')

const proxy = httpProxy.createServer()

const webUrl = 'http://web:5005'
const apiUrl = 'http://api:5006'
const api = '/api'
const port = 5000

http
  .createServer((req, res) => {
    let target = webUrl
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

    proxy.web(req, res, { target })
  })
  .listen(port)

console.log(`Proxy running on port ${port}`)
