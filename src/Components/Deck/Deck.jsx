import './Deck.css'
import Card from '../Card/Card'
import { useState } from 'react'

const Deck = ({cards}) => {
  const [selectedCard, setSelectedCard] = useState(0)
  const [flip, setFlip] = useState(false)

  const [guess, setGuess] = useState('')
  const [correct, setCorrect] = useState(null)

  const [streak, setStreak] = useState(0)
  const[longest, setLongest] = useState(0)

  const handleSubmit = () => {
    event.preventDefault()
    if(guess.toLowerCase() === cards[selectedCard].answer.toLowerCase()) {
      setCorrect(true)
      setStreak(streak + 1)
    }
    else {
      setCorrect(false)
      if(streak > longest) {
        setLongest(streak)
      }
      setStreak(0)
    }
  }

  /* Durstenfeld shuffle algorithm */
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const handleNext = () => {
    setSelectedCard(selectedCard + 1)
    setFlip(false)
    setGuess('')
    setCorrect(null)
  }

  const handlePrev = () => {
    setSelectedCard(selectedCard - 1)
    setFlip(false)
  }

  const handleShuffle = () => {
    setSelectedCard(0)
    shuffle(cards)
    setFlip(false)
  }

  return(
    <div>
      <div className='streak'>
        <h4>Streak: {streak}</h4>
        <h4>Longest Streak: {longest}</h4>
      </div>
      <Card card={cards[selectedCard]} flip={flip} setFlip={setFlip} />
      <div>
        <strong>Guess the answer: </strong>
        <input type='text' className={correct ? 'correct' :  correct === false ? 'wrong' : ''} placeholder='Place your guess here' onChange={(event) => setGuess(event.target.value)} />
        {!flip ? <button className="btn" type='submit' onClick={handleSubmit}>Guess</button> : <button className="btn disabled" type='submit' disabled>Guess</button>}
      </div>
      <br />
      {selectedCard != 0 ? <button className="btn" onClick={handlePrev}>Prev</button> : <button className="btn disabled" disabled>Prev</button>}
      <button className='btn' onClick={handleShuffle}>Shuffle</button>
      {selectedCard != cards.length - 1 ? <button className="btn" onClick={handleNext}>Next</button> : <button className="btn disabled" disabled>Next</button>}
    </div>
  )
}

export default Deck;