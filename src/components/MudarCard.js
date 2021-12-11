import React from "react";
import Cards from "./Cards.js";
import CardStatus from "./CardStatus.js";


export default function Mudarcard(props){

    const [cardNumber, nextCard] = React.useState(0);

    function changeNumber(){
        nextCard(cardNumber+1)
    }
  
    return(
        <Cards cardNumber = {cardNumber} 
        changeNumber= {changeNumber}/>

    )
}