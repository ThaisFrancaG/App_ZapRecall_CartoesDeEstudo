import React from "react";
import ResultsScreen from "../ResultsScreen.js";
import CardSide from "./CardSide.js";

export default function Cards(props) {
  const questionsAnswer = [
    {
      pergunta: "O que é JSX?",
      resposta: "Uma extensão de linguagem do JavaScript",
    },
    {
      pergunta: "O React é __ ",
      resposta: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
      pergunta: "Componentes devem iniciar com __",
      resposta: "letra maiúscula",
    },
    { pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões" },
    {
      pergunta: "O ReactDOM nos ajuda __ ",
      resposta: "interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      pergunta: "Usamos o npm para __ ",
      resposta: "gerenciar os pacotes necessários e suas dependências",
    },
    {
      pergunta: "Usamos props para __",
      resposta: "passar diferentes informações para componentes ",
    },
    {
      pergunta: "Usamos estado (state) para __ ",
      resposta:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  const [cardNumber, nextCard] = React.useState(0);
  const [cardResults, acumulateResults] = React.useState([]);

  function changeCard(newResult) {
    acumulateResults([...cardResults, newResult]);
    nextCard(cardNumber + 1);
  }

  if (cardNumber + 1 <= questionsAnswer.length) {
    return (
      <>
        <div className="home-screen">
          <CardSide
            cardNumber={cardNumber}
            changeCard={changeCard}
            goToCards={props.goToCards}
            cardSide={props.cardSide}
            totalCards={questionsAnswer.length}
            pergunta={questionsAnswer[cardNumber].pergunta}
            resposta={questionsAnswer[cardNumber].resposta}
          />
        </div>
      </>
    );
  } else {
    alert("fim do card em" + cardNumber);

    return <ResultsScreen cardResults={cardResults} />;
    
  }
}
