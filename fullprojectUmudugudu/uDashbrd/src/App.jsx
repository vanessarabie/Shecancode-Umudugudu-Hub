import React from 'react'
import './Sidebr.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Sidebar from './Components/Sidebr'
import Landinguser from './Pages/Landinguser';
import Guideline from './Pages/Guideline';
import CitizenForm from './Pages/CitizenForm';




function App() {
  return (
    <>
    
    <BrowserRouter>
   
    <Sidebar>
    
    <Routes>   
    
    <Route exact path="/" element={<Landinguser/>}/> 
      <Route exact path="/Guideline" element={<Guideline/>}/>
      <Route exact path="/CitizenForm" element={<CitizenForm/>}/>
  
    </Routes>
    </Sidebar>
    </BrowserRouter>

    </>
  )
}

export default App