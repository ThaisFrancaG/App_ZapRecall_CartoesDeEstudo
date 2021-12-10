import React from "react";
import Cards from "./Cards.js";

export default function Mudarcard(props){

    const [cardNumber, changeNumber] = React.useState(0);
  
    return(
        <Cards cardNumber = {cardNumber}/>

    )
}