import React from "react";
import CardStatus from "./CardStatus.js";



export default function CardSide(props) {
  const [frenteVerso, turnCard] = React.useState("frente");

  function changeSide() {
    turnCard("verso");
  }

  if (frenteVerso === "frente") {
    return (
      <>
      <div className = "card">
        <header className="top-bottom">
          {props.cardNumber}/{props.totalCards}
        </header>
        <article class="content card-frente">
          <span>{props.pergunta}</span>
        </article>
        <footer className = "top-bottom"><img onClick ={()=>changeSide()}src = "assets/turn.png"/></footer>
        </div>
      </>
      
    );
  } else if (frenteVerso === "verso") {
    return (
        <>
      <CardStatus
      pergunta = {props.pergunta}
      resposta = {props.resposta}
      totalCards = {props.totalCards}
      cardNumber = {props.cardNumber}
      />
      </>
    );
  }
}
