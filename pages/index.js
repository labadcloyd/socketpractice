import axios from 'axios';
import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import {SocketContext} from '../context/socketContext';

export default function Home() {
  const io = useContext(SocketContext);
  const [username, setUsername] = useState(null)
  const [usernamePrompt, showPrompt] = useState(false)
  const [usernameInput, setUsernameInput] = useState()
  const [userChat, setUserChats] = useState([])
  useEffect(()=>{
    if(!username){
      showPrompt(true)
    }
  },[])
  async function changeUsername(e){
    e.prevent.default()

    setUsername(usernameInput)
  }
  
  return (
    <div>
      {/* search bar */}
      <div>
        <form>
          <input type="search"></input>
        </form>
        <div>

        </div>
      </div>
      <div>
        {/* messages div */}
        <div></div>
        {/* message bar */}
        <form></form>
      </div>
      {/* username prompt */}
      <div style={{display:showPrompt?'flex':'none', justifyContent:'center', alignItems:'center', position:'fixed',top:'0', left:'0', width:'100%', height:'100%', backgroundColor:'#0000005c'}}>
        <form onSubmit={changeUsername}>
          <label htmlFor='usernameInput'>Enter a username</label>
          <input id='usernameInput' value={usernameInput} onChange={(e)=>{setUsernameInput(e.target.value)}}></input>
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}
