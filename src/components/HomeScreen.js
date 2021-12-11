import React from "react";
import App from "../App";
import CurrentScreen from "./CurrentScreen";
import MudarCard from "./MudarCard";

export default function HomeScreen(props) {
    
    return (
        <div className="home-screen">
            <figure>
            <img src="assets/logo.png" />
            </figure>
            <button onClick={()=>props.goToCards()} className="button-start"> Praticar React <img   src="assets/next.png" /></button>
        </div>
    )
}

