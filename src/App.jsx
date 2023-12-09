import { Header } from "./components/Header";
import { Player } from "./components/Player";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { Log } from "./components/Log";



function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = "O"
  }
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState("X");
const activePlayer = deriveActivePlayer(gameTurns);

  function handleSelectSq(rowIdx, colIdx) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
 const currentPlayer =deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div className="style.gameContainer">
        <Header />
        <div className="playerInfoGameBoard">
          <ol id="players" className="higlightPayer">
            <Player
              defaultName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              defaultName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            onSelectSq={handleSelectSq}
            turns={gameTurns}
          />
        </div>
      </div>
      <Log turns ={gameTurns}/>
    </main>
  );
}

export default App;
