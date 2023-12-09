import style from "./Header.module.css";
import { useState } from "react";

export function Player({ defaultName, symbol, isActive }) {
    const [playerName, setPlayerName ] = useState(defaultName);
  const [edit, setEdit] = useState(false);

  function handleEdit() {
    setEdit(edit => !edit);
  }

  function handleChange(ev){
    setPlayerName(ev.target.value);
  }
  let inputPlayerName = <span className={style.playerName}>{playerName}</span>;


  if (edit) {
    inputPlayerName = <input type="text" required value = {playerName} onChange={handleChange} />;
  
  }

  return (
    <li className={isActive? "active" : undefined}>
      <span className={style.player}>
        {inputPlayerName}
        <span className={style.playerSymbol}><b>{symbol}</b></span>
      </span>
      <button onClick={handleEdit}> {edit? "Save" : "Edit"} </button>
    </li>
  );
}
