import style from "./Header.module.css";
import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard() {
    const [gameBoard, setGameBoard]=useState(initialGameBoard);

    function handleSelectSq(rowIdx, colIdx){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIdx][colIdx] = 'X';
            return updatedBoard;
        });
    }

  return (
    <ol className={style.gameBoard}>
        
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button className={style.playerSymbolBut} onClick={()  => handleSelectSq(rowIdx, colIdx)} >{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
     
    </ol>
  );
}
