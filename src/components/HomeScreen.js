import React from "react";

export default function HomeScreen(props) {
    
    return (
        <div className="home-screen">
            <figure>
            <img src="assets/logo.png" alt = "logo_zapRecall" />
            </figure>
            <button onClick={()=>props.goToCards()} className="button-start"> Praticar React <img   src="assets/next.png" alt = "start" /></button>
        </div>
    )
}

