import React from "react";
import CardStatus from "./CardStatus.js";

export default function CardSide(props) {
  let [frenteVerso, turnCard] = React.useState(props.cardSide);

  function changeSide() {
    turnCard("verso");
  }
  function changeSideBack(cardResults) {
    turnCard("frente");
    props.changeCard(cardResults);
  }

  if (frenteVerso === "frente") {
    return (
      <>
        <div className="card">
          <header className="top-bottom">
            {props.cardNumber + 1}/{props.totalCards}
          </header>
          <article className="content card-frente">
            <span>{props.pergunta}</span>
          </article>
          <footer className="top-bottom">
            <img
              onClick={() => changeSide()}
              src="assets/turn.png"
              alt="see_answer"
            />
          </footer>
        </div>
      </>
    );
  } else if (frenteVerso === "verso") {
    return (
      <>
        <CardStatus
          pergunta={props.pergunta}
          resposta={props.resposta}
          totalCards={props.totalCards}
          changeSideBack={changeSideBack}
          cardNumber={props.cardNumber}
          changeCard={props.changeCard}
          goToCards={props.goToCards}
        />
      </>
    );
  }
}
