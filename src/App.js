import React from "react";
import Cards from "./components/Cards";
import HomeScreen from "./components/HomeScreen";
import MudarCard from "./components/MudarCard";
import CurrentScreen from "./components/CurrentScreen";



export default function App() {

const [currentDisplay, changeScreen] = React.useState(<HomeScreen goToCards = {goToCards}/>);

function goToCards(){
    changeScreen(<MudarCard/>);
}

    return ( <>
    {currentDisplay}

        </>
    )

  }