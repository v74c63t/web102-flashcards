import './Deck.css'
import Card from '../Card/Card'
import { useState } from 'react'

const Deck = ({cards}) => {
  const [selectedCard, setSelectedCard] = useState(0)

  const handleNext = () => {
    setSelectedCard(selectedCard + 1)
  }

  const handlePrev = () => {
    setSelectedCard(selectedCard - 1)
  }

  return(
    <div>
      <Card card={cards[selectedCard]} />
      {selectedCard != 0 ? <button className="btn" onClick={handlePrev}>prev</button> : <button className="btn" disabled>prev</button>}
      {selectedCard != cards.length - 1 ? <button className="btn" onClick={handleNext}>next</button> : <button className="btn" disabled>next</button>}
    </div>
  )
}

export default Deck;