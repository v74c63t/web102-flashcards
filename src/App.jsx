
import './App.css'
import Deck from './Components/Deck/Deck'
import data from './data/data.json'

function App() {

  /* Durstenfeld shuffle algorithm */
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  const cards = data.cards
  shuffle(cards)

  return (
    <>
      <div className="title">Hoshimachi Suisei Quiz</div>
      <div className="description">This is a general knowledge quiz about the Virtual YouTuber, Hoshimachi Suisei</div>
      <div className="num">Number of Cards: {cards.length}</div>
      <div className="container">
        <Deck cards={cards} />
      </div>
    </>
  )
}

export default App
