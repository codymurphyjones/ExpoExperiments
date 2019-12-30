const express = require('express')
const next = require('next')
const cors = require('cors')
const dev = process.env.NODE_ENV !== 'production'
<<<<<<< HEAD
const port = process.argv[process.argv.length - 1].replace("$PORT", "3000")
const app = next({ dev })
const handle = app.getRequestHandler()


=======
const port = process.argv[2].replace("$PORT", "3000");;
const app = next({ dev })
const handle = app.getRequestHandler()

>>>>>>> f2553a9d27b59fac99d8580b19a650f79cc1c865
app.prepare()
.then(() => {
  const server = express()
  server.options('*', cors()) 
  
  server.use(express.static('public'))
  
  server.get('*/:sent', (req, res) => {
    return app.render(req, res, '/', { sent: req.params.sent })
  })
  
  server.get('*', (req, res) => {
    return handle(req, res)
  })
    
  server.listen(port, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})