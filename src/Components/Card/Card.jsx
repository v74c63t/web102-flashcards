import './Card.css'
import { useState } from 'react'

const Card = () => {
    const [flip, setFlip] = useState(false)
    return(
        <div>
            <div className="card" onClick={()=>setFlip(!flip)}>
              {
                flip ? <div className="back">back</div> :
                <div className="front">front</div>
              }
            </div>
            <button className="btn">prev</button>
            <button className="btn">next</button>
        </div>
    )
}

export default Card;