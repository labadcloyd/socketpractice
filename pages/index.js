import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'

export default function Home() {
  
  return (
    <div>
      {/* search bar */}
      <div>
        <form>
          <input type="search"></input>
        </form>
      </div>
      <div>
        {/* messages div */}
        <div></div>
        {/* message bar */}
        <form></form>
      </div>
      {/* username prompt */}
      {/* <div style={{display:showPrompt?'flex':'none', justifyContent:'center', alignItems:'center', position:'fixed',top:'0', left:'0', width:'100%', height:'100%', backgroundColor:'#0000005c'}}>
        <form onSubmit={changeUsername}>
          <input value={usernameInput} onChange={(e)=>{setUsernameInput(e.target.value)}}></input>
          <button type='submit'></button>
        </form>
      </div> */}
    </div>
  )
}
