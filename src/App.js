import React from "react";
import HomeScreen from "./components/HomeScreen";
import Cards from "./components/Cards";

// Start CHOKIDAR_USEPOLLING=true npm start

export default function App() {
  let [currentDisplay, changeScreen] = React.useState(
    <HomeScreen goToCards={goToCards} />
  );
  let [cardSide, changeCardSide] = React.useState("frente");

  function changeCard() {
    goToCards("newCard");
  }

  function goToCards(currentValue) {
    if (currentValue === "newCard") {
      changeCardSide("frente");
      changeScreen(
        <Cards
          goToCards={goToCards}
          cardSide={cardSide}
          changeCard={changeCard}
        />
      );
    } else {
      changeScreen(
        <Cards
          goToCards={goToCards}
          cardSide={cardSide}
          changeCard={changeCard}
        />
      );
    }
  }

  return <>{currentDisplay}</>;
}
