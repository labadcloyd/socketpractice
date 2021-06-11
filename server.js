const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 3000
require('dotenv').config({path:'./config.env'})

io.on('connection', (socket)=>{
  console.log('connected')
  socket.on('welcome', (arg)=>{
    console.log(arg)
  })
})

nextApp.prepare().then(() => {
  
  app.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})