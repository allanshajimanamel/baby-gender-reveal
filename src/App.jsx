import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CountdownTimer from "./CountdownTimer";

function App() {
  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: "url('./assets/img1.jpeg')" }}>
     <div className="app-container">
       <div className='background-box'>
       <CountdownTimer initialSeconds={10} />
       </div>
     </div>
    </div>
  );
}

export default App
