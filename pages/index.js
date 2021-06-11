import Head from 'next/head'
import socketio from 'socket.io-client'

export default function Home() {
  const io = socketio()
  io.on('connect', (data)=>{
    console.log('connected to socket')
    io.emit('welcome', {message:"Hello world"}) 
  })
  return (
    <div >
    </div>
  )
}
