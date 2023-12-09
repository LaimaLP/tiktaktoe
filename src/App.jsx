import { Header } from "./components/Header";
import { Player } from "./components/Player";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import { useState } from "react";
import style from "./components/Header.module.css";

function App() {
  const [activePlayer, setActivePlayer]= useState("X");
  
  function handleSelectSq(){
    setActivePlayer((curActivePlayer)=> curActivePlayer === "X"? "O": "X" );
  }

  return (
    <main>
      <div className="style.gameContainer">
        <Header />
        <div className='playerInfoGameBoard'>
          <ol id="players" className="higlightPayer">
            <Player defaultName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player defaultName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
          </ol>
          <GameBoard onSelectSq={handleSelectSq} activePlayerSymbol={activePlayer} />
        </div>
      </div>
      LOG
    </main>
  );
}

export default App;
