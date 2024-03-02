import { useState } from 'react'
import './App.css'

function App() {
  const [flip, setFlip] = useState(false)

  return (
    <>
      <div className="title"></div>
      <div className="description"></div>
      <div className="container">
        <div className="card" onClick={()=>setFlip(!flip)}>
          {
            flip ? <div className="back">back</div> :
            <div className="front">front</div>
          }
        </div>
        <button className="btn">prev</button>
        <button className="btn">next</button>
      </div>
    </>
  )
}

export default App
