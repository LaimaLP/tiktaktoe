import style from "./Header.module.css";
import { useState } from "react";

export function Player({ defaultName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName ] = useState(defaultName);
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(edit => !edit);
    if(edit){
    onChangeName(symbol, playerName);
  }
  }

  function handleChange(ev){
    setPlayerName(ev.target.value);
  }
  let inputPlayerName = <span className={style.playerName}>{playerName}</span>;


  if (edit) {
    inputPlayerName = <input type="text" required value = {playerName} onChange={handleChange} />;
  
  }

  return (
    <li id="playerInfoContainer" className={isActive? "active" : undefined}>
      <span className={style.player}>
        {inputPlayerName}
        <span className={style.playerSymbol}><b>{symbol}</b></span>
      </span>
      <button className={style.editBtn} onClick={handleEdit}> {edit? "Save" : "Edit"} </button>
    </li>
  );
}
