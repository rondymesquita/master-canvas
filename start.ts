import httpProxy from 'http-proxy'
import http from 'http'

const proxy = httpProxy.createServer()

const webUrl = 'http://localhost:5005'
const apiUrl = 'http://localhost:5006'
const api = '/api'
const port = 5000

http
  .createServer((req: any, res: any) => {
    let target = webUrl
    if (req.url.startsWith(api)) {
      req.url = req.url.replace(api, '/')
      target = apiUrl
    }
    proxy.web(req, res, { target })
  })
  .listen(port)

console.log(`Proxy running on port ${port}`)
