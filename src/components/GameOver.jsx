export default function GameOver({ winner, onRestart }) {
  return (
    <div className="gameOver">
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw !</p>}

      <p>
        <button onClick={onRestart}> Rematch!</button>
      </p>
    </div>
  );
}
