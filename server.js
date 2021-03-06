const path = require('path')
const express = require('express')
const next = require('next')
const compression = require('compression')
// const httpProxy = require('http-proxy')

const dev = process.env.NODE_ENV !== 'production'
// const targetUrl = `http://localhost:8080`
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // const proxy = httpProxy.createProxyServer({
    //   target: targetUrl,
    //   changeOrigin: true,
    // })

    const content = path.resolve('content')
    server.use(express.static(content))
    server.use(compression())
    server.get('/', (req, res) => {
      const actualPage = '/index'
      app.render(req, res, actualPage)
    })

    server.get('/post/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('/admin/posts', (req, res) => {
      const actualPage = '/admin'
      app.render(req, res, actualPage)
    })

    server.get('/admin/create/post', (req, res) => {
      const actualPage = '/edit'
      app.render(req, res, actualPage)
    })

    server.get('/admin/edit/post/:id', (req, res) => {
      const actualPage = '/edit'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => handle(req, res))

    server.listen(3000, err => {
      if (err) throw err
      console.info('> Ready on http://localhost:3000')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
