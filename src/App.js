import React from "react";
import HomeScreen from "./components/HomeScreen";
import Cards from "./components/Cards";
import ResultsScreen from "./ResultsScreen";

// Start CHOKIDAR_USEPOLLING=true npm start


export default function App() {

let [currentDisplay, changeScreen] = React.useState(<HomeScreen goToCards = {goToCards}/>);
let [cardSide, changeCardSide] = React.useState("frente");

function changeCard(){
    goToCards("newCard")
   
}

function endScreen(cardResults){
changeScreen(<ResultsScreen 
    selectScreen = {cardResults}
    />)
}

function goToCards(currentValue){
  
if(currentValue ==="newCard"){
    changeCardSide("frente")
    changeScreen(<Cards
        
        goToCards = {goToCards}
        cardSide = {cardSide}
        changeCard = {changeCard}
        endScreen = {endScreen}

        
        />);

    }
    else{
    
        changeScreen(<Cards
         goToCards = {goToCards}
         cardSide = {cardSide}
         changeCard = {changeCard}
        endScreen = {endScreen}

         />);
    }
}


    return ( <>
    {currentDisplay}
   

        </>
    )

  }