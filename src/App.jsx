import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import MainSectiom from './components/mainsection/MainSection'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <div className="mainContainer">
        <Navbar/>
        <div className="mainSectionContentContainer">
          <Sidebar/>
          <MainSectiom/>
        </div>
        <Footer/>
      </div>

    </>
  )
}

export default App
