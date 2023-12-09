import style from "./Header.module.css";

export function GameBoard({ onSelectSq, board }) {

  return (
    <>
      <ol className={style.gameBoard}>
        {board.map((row, rowIdx) => (
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
