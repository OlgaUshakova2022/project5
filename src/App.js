import React from 'react';
import './App.css';
import StartComponent from './Components/StartComponent/StartComponent';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Start from './Components/Start/Start';



function App(props) {


  return (
   <BrowserRouter>
   <>
         
                        <Routes> 
                         
                           <Route  path='/' element={<Start/>}/> 
                           <Route  path='/start' element={<StartComponent a = {props.a}/>}/> 
                         
                        </Routes>
                            
                  
    </>
   </BrowserRouter>
        
    
  ); 
}

export default App;

