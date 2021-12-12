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
        <div className={cardState}>
          <header className="top-bottom">
            <span>{props.pergunta}</span> {props.cardNumber + 1}/
            {props.totalCards}
          </header>
          <article class="content card-verso">
            <span>{props.resposta}</span>
          </article>
          <footer className="back-bottom">
            <button onClick={() => changeCardStatus("new")} className="new">
              Aprendi Agora UwU
            </button>
            <button onClick={() => changeCardStatus("fail")} className="fail">
              Não Lembrei :(
            </button>
            <button
              onClick={() => changeCardStatus("sucess")}
              className="sucess"
            >
              Lembrei com Esforço :'D
            </button>
            <button onClick={() => changeCardStatus("zap")} className="zap">
              Zap! ! ! ! (ﾐ⚈ ﻌ ⚈ﾐ)
            </button>
          </footer>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={cardState}>
          <header className="top-bottom">
            <span>{props.pergunta}</span> {props.cardNumber + 1}/
            {props.totalCards}
          </header>
          <article class="content card-verso">
            <span>{props.resposta}</span>
          </article>
          <footer className="top-bottom">
            <img
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
