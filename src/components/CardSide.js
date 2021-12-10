import React from "react";

export default function CardSide(props) {
  const [frenteVerso, turnCard] = React.useState("verso");

  function changeSide() {
    turnCard("verso");
  }

  if (frenteVerso === "frente") {
    return (
      <>
        <header className="top-bottom">
          {props.cardNumber}/{props.totalCards}
        </header>
        <article class="content card-frente">
          <span>{props.pergunta}</span>
        </article>
        <footer className = "top-bottom"><img onClick ={()=>changeSide()}src = "assets/turn.png"/></footer>
      </>
    );
  } else if (frenteVerso === "verso") {
    return (
        <>
        <header className="top-bottom">
         <span>{props.pergunta}</span> {props.cardNumber}/{props.totalCards}
        </header>
        <article class="content card-verso">
          <span>{props.resposta}</span>
        </article>
        <footer className = "back-bottom">
            <button className = "new">Aprendi Agora UwU</button>
            <button className = "fail">Não Lembrei :(</button>
            <button className = "sucess" >Lembrei com Esforço :'D</button>
            <button className = "zap">Zap! ! ! ! (ﾐ⚈ ﻌ ⚈ﾐ)</button>
            </footer>
      </>
    );
  }
}
