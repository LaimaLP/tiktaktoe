import style from "./Header.module.css";


export function GameBoard({ onSelectSq, turns }) {

  return (
    <>
      <ol className={style.gameBoard}>
        {gameBoard.map((row, rowIdx) => (
          <li key={rowIdx}>
            <ol>
              {row.map((playerSymbol, colIdx) => (
                <li key={colIdx}>
                  <button onClick={()=> onSelectSq(rowIdx, colIdx)}
                    className={style.playerSymbolBut} disabled={playerSymbol !== null}>
                    {playerSymbol}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </>
  );
}
