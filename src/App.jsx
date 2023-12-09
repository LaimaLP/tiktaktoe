import { Header } from "./components/Header";
import { Player } from "./components/Player";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { Log } from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winningCombination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns){
  let currentPlayer = "X";

  if(gameTurns.length > 0 && gameTurns[0].player === "X"){
    currentPlayer = "O"
  }
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("X");

const activePlayer = deriveActivePlayer(gameTurns);

let gameBoard = initialGameBoard;

  for(const turn of gameTurns){
    const {square, player} = turn;
    const {row, col} = square;

    gameBoard[row][col] = player;
  }

let winner;


for(const combination of WINNING_COMBINATIONS){
  const firstSqSymbol = gameBoard[combination[0].row][combination[0].column];
  const secondSqSymbol= gameBoard[combination[1].row][combination[1].column];
  const thirdSqSymbol= gameBoard[combination[2].row][combination[2].column];

  if(firstSqSymbol && firstSqSymbol===secondSqSymbol && firstSqSymbol===thirdSqSymbol){
    winner = firstSqSymbol;
  }
}

  function handleSelectSq(rowIdx, colIdx) {
    // setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));

    setGameTurns((prevTurns) => {
 const currentPlayer = deriveActivePlayer(prevTurns);

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
          {winner && <p>You won, {winner}! </p>}
          <GameBoard
            onSelectSq={handleSelectSq} board={gameBoard}/>
        </div>
      </div>
      <Log turns ={gameTurns}/>
    </main>
  );
}

export default App;
