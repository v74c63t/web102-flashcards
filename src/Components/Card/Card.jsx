import './Card.css'
import { useState } from 'react'

const Card = ({card}) => {
  const [flip, setFlip] = useState(false)

  return(
    <div className="card" onClick={()=>setFlip(!flip)}>
      {
        flip ? <div className="back">{card.answer}</div> :
        <div className="front">{card.question}</div>
      }
    </div>
  )
}

export default Card;