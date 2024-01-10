import { Header } from "./components/Header";
import { Player } from "./components/Player";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import { Log } from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/winningCombination";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [players, setPlayers] = useState({
    "X": "Player 1",
    "O": "Player 2"
  })
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSqSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSqSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSqSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSqSymbol &&
      firstSqSymbol === secondSqSymbol &&
      firstSqSymbol === thirdSqSymbol
    ) {
      winner = players[firstSqSymbol];
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

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
function handleRestart(){
  setGameTurns([]);
}
function handlePlayerNameChnage(symbol, newName){
  setPlayers(prevPlayers => {
    return {
      ...prevPlayers,
      [symbol]: newName
    };
  });
}
  return (
    <main>
      <div className="gameContainer">
        <Header />
        <div className="playerInfoGameBoard">
          <ol id="players" className="higlightPayer">
            <Player
              defaultName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
              onChangeName={handlePlayerNameChnage}
            />
            <Player
              defaultName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
              onChangeName={handlePlayerNameChnage}

            />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard onSelectSq={handleSelectSq} board={gameBoard} />
        </div>
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
