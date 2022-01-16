export default function ResultsScreen(props) {
  let totalFails = 0;

  for (let i = 0; i < props.cardResults.length; i++) {
    if (props.cardResults[i] === "fail") {
      totalFails++;
    }
  }

  if (totalFails === 0) {
    return (
      <div className="results">
        <p className="mainResult">
          PARABÉNS! <img src="./assets/party.png" alt="party_emoji" />
        </p>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
    );
  } else {
    return (
      <div className="results">
        <p className="mainResult">
          Putz..
          <img src="./assets/sad.png" alt="sad_emoji" />
        </p>
        <p>Você esqueceu {totalFails} flashcards</p>
        <p>Não desanime! Na próxima você consegue!!</p>
      </div>
    );
  }
}
