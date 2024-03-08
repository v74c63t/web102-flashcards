
import './App.css'
import Deck from './Components/Deck/Deck'
import data from './data/data.json'

function App() {

  const cards = data.cards

  return (
    <>
      <div className="title">title</div>
      <div className="description">description</div>
      <div className="num">Number of Cards: {cards.length}</div>
      <div className="container">
        <Deck cards={cards} />
      </div>
    </>
  )
}

export default App
