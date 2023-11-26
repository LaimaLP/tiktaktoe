import style from "./Header.module.css";
export function Header() {
  return (
    <>
      <div className={style.headerContainer}>
        <h1>Tic Tac Toe game</h1>
      </div>
    </>
  );
}
