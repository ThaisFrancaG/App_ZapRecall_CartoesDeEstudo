import React from "react";
import App from "../App";
import CurrentScreen from "../CurrentScreen";
import Mudarcard from "./MudarCard";

export default function HomeScreen() {
    
function goToCards(){
    alert("oi")
    return(
        <CurrentScreen/>
    )
}

    return (
        <div className="home-screen">
            <figure>
            <img src="assets/logo.png" />
            </figure>
            <button onClick={()=>goToCards()} className="button-start"> Praticar React <img   src="assets/next.png" /></button>
        </div>
    )
}

