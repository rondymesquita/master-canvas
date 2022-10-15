const httpProxy = require('http-proxy')
const https = require('https')
const http = require('http')
const fs = require('fs')

const isDev =
  process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'dev'

const isProd = !isDev

let options = {}

if (isProd) {
  options = {
    key: fs.readFileSync(
      '/etc/letsencrypt/live/canvasnaweb.com.br/privkey.pem',
    ),
    cert: fs.readFileSync('/etc/letsencrypt/live/canvasnaweb.com.br/cert.pem'),
  }
}

const webPort = '5005'
const apiPort = '5006'
const apiPath = '/api'
const host = '127.0.0.1'

const proxy = httpProxy.createProxyServer({})

const port = isDev ? 5000 : 443

console.log({ isDev, isProd, port, NODE_ENV: process.env.NODE_ENV })

const protocolModuleInstance = isDev ? http : https

const server = protocolModuleInstance.createServer(options, function (
  req,
  res,
) {
  if (req.url.startsWith(apiPath)) {
    req.url = req.url.replace(apiPath, '')
    proxy.web(req, res, {
      target: `http://${host}:${apiPort}`,
    })
  } else {
    proxy.web(req, res, { target: `http://${host}:${webPort}` })
  }
})

server.listen(port, () => console.log(`Proxy started on ${port}`))
