import { Header } from "./components/Header";
import { Player } from "./components/Player";
import "./App.css";
import { GameBoard } from "./components/GameBoard";
import style from "./components/Header.module.css";

function App() {
  return (
    <main>
      <div className="style.gameContainer">
        <Header />
        <div className='playerInfoGameBoard'>
          <ol id="players">
            <Player defaultName="Player 1" symbol="X" />
            <Player defaultName="Player 2" symbol="0" />
          </ol>
          <GameBoard />
        </div>
      </div>
      LOG
    </main>
  );
}

export default App;
