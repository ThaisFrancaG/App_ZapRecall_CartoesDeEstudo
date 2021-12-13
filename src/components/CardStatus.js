import React from "react";
import ResultsScreen from "../ResultsScreen";

export default function CardStatus(props) {
  const [cardState, changeState] = React.useState("card");
  const [currentStatus, changeStatus] = React.useState("none");

  function changeCardStatus(choice) {
    let state = cardState + " " + choice;
    changeState(state);
    changeStatus(choice);
  }

  if (cardState === "card") {
    return (
      <>
        <div data-identifier="flashcard" className={cardState}>
          <header data-identifier="counter" className="top-bottom">
            <span>{props.pergunta}</span> {props.cardNumber + 1}/
            {props.totalCards}
          </header>
          <article class="content card-verso">
            <span>{props.resposta}</span>
          </article>
          <footer className="back-bottom">
            <button onClick={() => changeCardStatus("new")} className="new">
              Aprendi Agora
            </button>
            <button onClick={() => changeCardStatus("fail")} className="fail">
              Não Lembrei 
            </button>
            <button
              onClick={() => changeCardStatus("sucess")}
              className="sucess"
            >
              Lembrei com Esforço
            </button>
            <button onClick={() => changeCardStatus("zap")} className="zap">
              Zap! 
            </button>
          </footer>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div data-identifier="flashcard" className={cardState}>
          <header data-identifier="counter" className="top-bottom">
            <span>{props.pergunta}</span> {props.cardNumber + 1}/
            {props.totalCards}
          </header>
          <article class="content card-verso">
            <span>{props.resposta}</span>
          </article>
          <footer className="top-bottom">
            <img data-identifier="arrow"
              onClick={() => props.changeSideBack(currentStatus)}
              src="assets/turn.png"
              alt="next_card"
            />
          </footer>
        </div>
      </>
    );
  }
}
