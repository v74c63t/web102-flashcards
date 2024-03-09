import './Deck.css'
import Card from '../Card/Card'
import { useState } from 'react'

const Deck = ({cards}) => {
  const [selectedCard, setSelectedCard] = useState(0)
  const [flip, setFlip] = useState(false)

  /* Durstenfeld shuffle algorithm */
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

  const handleNext = () => {
    if(selectedCard == cards.length - 1) {
      setSelectedCard(0)
      shuffle(cards)
    }
    else {
      setSelectedCard(selectedCard + 1)
    }
    setFlip(false)
  }

  const handlePrev = () => {
    setSelectedCard(selectedCard - 1)
    setFlip(false)
  }

  return(
    <div>
      <Card card={cards[selectedCard]} flip={flip} setFlip={setFlip} />
      {selectedCard != 0 ? <button className="btn" onClick={handlePrev}>Prev</button> : <button className="btn disabled" disabled>Prev</button>}
      {selectedCard != cards.length - 1 ? <button className="btn" onClick={handleNext}>Next</button> : <button className="btn" onClick={handleNext}>Restart</button>}
    </div>
  )
}

export default Deck;