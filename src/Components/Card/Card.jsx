import './Card.css'
import { useState } from 'react'

const Card = ({question, answer}) => {
  const [flip, setFlip] = useState(false)
  return(
    <div>
      <div className="card" onClick={()=>setFlip(!flip)}>
        {
          flip ? <div className="back">{answer}</div> :
          <div className="front">{question}</div>
        }
      </div>
      <button className="btn">prev</button>
      <button className="btn">next</button>
    </div>
  )
}

export default Card;