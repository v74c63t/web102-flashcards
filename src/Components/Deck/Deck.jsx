import './Deck.css'
import Card from '../Card/Card'
import { useState } from 'react'
import Fuse from 'fuse.js'

const Deck = ({cards}) => {
  const [selectedCard, setSelectedCard] = useState(0)
  const [flip, setFlip] = useState(false)

  const [guess, setGuess] = useState('')
  const [correct, setCorrect] = useState(null)

  const [streak, setStreak] = useState(0)
  const[longest, setLongest] = useState(0)

  const handleSubmit = () => {
    event.preventDefault()

    if(!isNaN(Date.parse(cards[selectedCard].answer))) {
      if(isNaN(Date.parse(guess))) {
        setCorrect(false)
        if(streak > longest) {
          setLongest(streak)
        }
        setStreak(0)
      }
      else {
        const d1 = new Date(guess)
        const d2 = new Date(cards[selectedCard].answer)
        if(d1.getDate() === d2.getDate()) {
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
    }
    else {
      const fuse = new Fuse([cards[selectedCard].answer], {includeScore: true, isCaseSensitive: false, shouldSort: true})
      const result = fuse.search(guess)
      if(result.length == 0) {
        setCorrect(false)
        if(streak > longest) {
          setLongest(streak)
        }
        setStreak(0)
      }
      else if(result[0].score < 0.4) {
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
    setGuess('')
    setCorrect(null)
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
        <input type='text' className={correct ? 'correct' :  correct === false ? 'wrong' : ''} placeholder='Place your guess here' onChange={(event) => setGuess(event.target.value)}  value={guess}/>
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