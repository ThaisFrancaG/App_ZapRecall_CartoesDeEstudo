import React from "react";
import CardSide from "./CardSide.js";
import MudarCard from "./MudarCard.js";


export default function CardStatus(props){

const [cardState,changeState] = React.useState("card");

function changeCardStatus(choice){
let statusAtual = choice;
let state = cardState+ " "+choice;
changeState(state);
}

let currentScreen

if(cardState==="card"){
return (
<>
<div className = {cardState}>
        <header className="top-bottom">
         <span>{props.pergunta}</span> {props.cardNumber}/{props.totalCards}
        </header>
        <article class="content card-verso">
          <span>{props.resposta}</span>
        </article>
        <footer className = "back-bottom">
        <button 
 onClick={()=>changeCardStatus("new")} className = "new">Aprendi Agora UwU</button>
<button 
onClick={()=>changeCardStatus("fail")} className = "fail">Não Lembrei :(</button>
<button 
onClick={()=>changeCardStatus("sucess")} className = "sucess" >Lembrei com Esforço :'D</button>
<button 
onClick={()=>changeCardStatus("zap")} className = "zap">Zap! ! ! ! (ﾐ⚈ ﻌ ⚈ﾐ)</button>
            </footer>
            </div>
 
   
            </>
)}

else{
    return (
        <>
        <div className = {cardState}>
                <header className="top-bottom">
                 <span>{props.pergunta}</span> {props.cardNumber}/{props.totalCards}
                </header>
                <article class="content card-verso">
                  <span>{props.resposta}</span>
                </article>
                <footer className = "top-bottom"><img onClick ={()=>props.changeNumber()} src = "assets/turn.png"/></footer>
                    </div>
                    </>
        )
}

}