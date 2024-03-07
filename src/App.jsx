
import './App.css'
import Card from './Components/Card/Card'
import cards from './data/data.json'

function App() {

  return (
    <>
      <div className="title">title</div>
      <div className="description">description</div>
      <div className="num">num</div>
      <div className="container">
        {cards.map((card, i) => {
          return (
            <Card key={i} question={card.question} answer={card.answer} />
          )
        })}
      </div>
    </>
  )
}

export default App
