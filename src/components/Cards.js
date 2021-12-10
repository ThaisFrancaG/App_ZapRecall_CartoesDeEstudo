import React from "react";
import CardSide from "./CardSide.js";


export default function Cards(props){
    
    const questionsAnswer = [
        {pergunta: "O que é JSX?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: "O React é __ ", resposta: "uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: "Componentes devem iniciar com __", resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __ ", resposta: "interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: "Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {pergunta: "Usamos props para __", resposta: "passar diferentes informações para componentes "},
        {pergunta: "Usamos estado (state) para __ ", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]
    
return (
    <>

    <CardSide 
    cardNumber = {props.cardNumber} 
    totalCards = {questionsAnswer.length}
    pergunta = {questionsAnswer[props.cardNumber].pergunta} resposta = {questionsAnswer[props.cardNumber].resposta}
     />

      </>

)

}