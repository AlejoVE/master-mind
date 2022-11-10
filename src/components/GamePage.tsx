import AvailableColors from "./AvailableColors";
import Row from "./Row";
import ShowCode from "./ShowCode";
import { useContext, useEffect } from "react";
import { GameContext } from "../context/gameContext";
import { Link } from "react-router-dom";

function GamePage() {
  const { score, gameRows, setAvailableRows } = useContext(GameContext);
  const gameRowsArr = Array.from(Array(gameRows).keys());

  useEffect(() => {
    setAvailableRows(gameRows);
  }, [gameRows, setAvailableRows]);

  return (
    <>
      <Link to={"/start"}>Home</Link>
      <h2>SCORE: {score}</h2>
      <div className="page-content">
        <ShowCode />
        {gameRowsArr.map((row, i) => (
          <Row key={i} />
        ))}
        <AvailableColors />
      </div>
    </>
  );
}

export default GamePage;
