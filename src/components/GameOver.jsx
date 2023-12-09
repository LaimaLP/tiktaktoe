export default function GameOver({winner, hasDraw}){
    return <div className="gameOver">
<h2>Game Over!</h2>
{winner && <p>{winner} won!</p>}
{!winner && <p>It's a draw !</p>}

<p>
    <button> Rematch!</button>
    </p>
    </div>
}