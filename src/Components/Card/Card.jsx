import './Card.css'

const Card = ({card, flip, setFlip}) => {

  return(
    <div className={`card ${card.difficulty}`} onClick={()=>setFlip(!flip)}>
      {
        flip ? <div className="back">
                {card.answerImage != undefined ? <div> <img width={250} height={"auto"} src={card.answerImage} alt='answer image' /> </div> : card.answer}
                {card.video != undefined ? (
                  <div> 
                    <iframe width="320" height="240"
                      src={card.video}>
                    </iframe>
                  </div>
                ) : ""}
              </div> 
              :
        <div className="front">{card.question}</div>
      }
    </div>
  )
}

export default Card;