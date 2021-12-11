import React from "react";
import HomeScreen from "./components/HomeScreen";
import MudarCard from "./components/MudarCard";
import CardSide from "./components/CardSide";
import Cards from "./components/Cards";

// Start CHOKIDAR_USEPOLLING=true npm start


export default function App() {

let [currentDisplay, changeScreen] = React.useState(<HomeScreen goToCards = {goToCards}/>);
let [cardSide, changeCardSide] = React.useState("frente");

function changeCard(){
    goToCards("newCard")
    alert(cardSide)
   
}

function goToCards(currentValue){
alert("fui chamado, mas nao para atualizar")
    if(currentValue =="newCard"){
    changeCardSide("frente")
    alert("fui chamado para atualizar")
    changeScreen(<Cards
        
        goToCards = {goToCards}
        cardSide = {cardSide}
        cardNumber = {0}
        changeCard = {changeCard}

        
        />);

    }
    else{
    
        changeScreen(<Cards
         goToCards = {goToCards}
         cardSide = {cardSide}
         cardNumber = {2}
        
         changeCard = {changeCard}
         />);
    }
}


    return ( <>
    {currentDisplay}

        </>
    )

  }