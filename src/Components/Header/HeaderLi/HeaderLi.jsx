import React from 'react';
import './HeaderLi.css';


function HeaderLi (props) {
  
    return (
     <>
        <nav>
            <ul>
                <li> 
                  <button 
                 name={props.genres}
                 onClick={(e)=>{
                                props.getData(e.target.name)
                            }}
                            >{props.genres}</button>
                </li>
            </ul>
       </nav>
    </>  
  )
    };

    export default HeaderLi;