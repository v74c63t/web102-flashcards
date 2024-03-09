
import './App.css'
import Deck from './Components/Deck/Deck'
import data from './data/data.json'

function App() {

  const cards = data.cards

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
