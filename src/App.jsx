
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [isword,setWord]=useState(true)
  const hidden=()=>{
setWord(!isword);
  }

  return (
    <>
    



<button onClick={hidden}>Click me</button>

{isword && <p>Hellow there</p> }



    




    
    </>


      )
}

export default App
