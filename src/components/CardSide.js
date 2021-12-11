import React from "react";
import CardStatus from "./CardStatus.js";



export default function CardSide(props) {
  let [frenteVerso, turnCard] = React.useState(props.cardSide);

  function changeSide() {
    turnCard("verso");
  }
  function changeSideBack() {
    turnCard("frente");
    props.goToCards("newCard")
    alert("fui chamado depois da outra função")
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
      changeSideBack = {changeSideBack}
      cardNumber = {props.cardNumber}
      changeCard= {props.changeCard}
      goToCards = {props.goToCards}
      />
      </>
    );
  }
}
