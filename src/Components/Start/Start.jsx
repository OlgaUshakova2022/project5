import React from 'react'
import './Start.css';
import logo from '../../images/Image24.jpg'; 


function Start() {
  return (
    <div className='startWrapper'>
      <div className='wrapper'>
        <img src={logo} alt="Logo" className='photo'/>
        <div className='start'>
            <span className='startSpan'>Welcome to my first react project</span>  
        </div>
      </div> 
        <button className='button'><a href ="/start" className='startA'>START</a></button>
    </div>
  )
}

export default Start;