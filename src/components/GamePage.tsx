import AvailableColors from "./AvailableColors";
import Row from "./Row";
import ShowCode from "./ShowCode";
import { useContext, useEffect } from "react";
import { GameContext } from "../context/gameContext";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function GamePage() {
  const { gameRows, setAvailableRows, gameOver } = useContext(GameContext);
  const gameRowsArr = Array.from(Array(gameRows).keys());

  useEffect(() => {
    setAvailableRows(gameRows);
  }, [gameRows, setAvailableRows]);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="page-content">
        {" "}
        <Link to={"/start"} className="back">
          Home
        </Link>
        <div className="game">
          <div className="header">
            <div className="timer" id="timer">
              {/* <Timer /> */}
              {gameOver ? (
                <button className="new-game" id="new-game" onClick={reloadPage}>
                  NEW GAME
                </button>
              ) : (
                <Timer />
              )}
            </div>

            <div className="sequence" id="sequence">
              <ShowCode />
            </div>
          </div>
        </div>
        <div className="board" id="board">
          {gameRowsArr.map((row, i) => (
            <Row key={i} />
          ))}
        </div>
        <div className="available-colors" id="available-colors">
          <AvailableColors />
        </div>
      </div>
    </>
  );
}

export default GamePage;
