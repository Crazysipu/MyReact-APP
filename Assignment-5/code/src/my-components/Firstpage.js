import './App.js'
import './Firstpage.css'

import React from 'react'

export default function Firstpage() {
  return (
    <div className='myfirst-wrapper'>
      <nav className='nav'>
            <h1>1.</h1>
            <hr />
        </nav>
        <div className='card'>
            <img src="https://images.pexels.com/photos/769525/pexels-photo-769525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <div className='tex'>
                <h1>10x Team 04</h1>
                <button>
                  <a href="http://localhost:3000/">Enter</a>
                </button>
            </div>
        </div>    
    </div>
  )
}
