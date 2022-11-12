import { useContext } from "react";
import Circle from "./Circle";
import { GameContext } from "../context/gameContext";

function ShowCode() {
  const { currentCode, gameOver } = useContext(GameContext);

  return (
    <div>
      {gameOver ? (
        currentCode.map(color => {
          return <Circle key={color} disabled={true} color={color} size="3" />;
        })
      ) : (
        <div>
          <Circle gameOver={gameOver} disabled={true} size="3" />
          <Circle gameOver={gameOver} disabled={true} size="3" />
          <Circle gameOver={gameOver} disabled={true} size="3" />
          <Circle gameOver={gameOver} disabled={true} size="3" />
        </div>
      )}
    </div>
  );
}

export default ShowCode;
