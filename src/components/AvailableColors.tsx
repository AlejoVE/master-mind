import React, { useContext } from "react";
import Circle from "./Circle";
import { GameContext } from "../context/gameContext";
import { Colors } from "../types/types";

function AvailableColors() {
  /* indication which color is selected */
  const { setCurrentColor, currentColor, setStartTimer, gameOver } =
    useContext(GameContext);
  const colors = Object.values(Colors);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const color: string = (e.target as HTMLButtonElement).getAttribute(
      "data-color"
    ) as string;
    setCurrentColor(color);
    // To avoid to trigger the modal from timer when time left = 0
    if (gameOver) return;
    setStartTimer(true);
  };

  return (
    <div className="select-color">
      <div className="current-color">
        {/* indication which color is selected */}
        <h3>Selected color</h3>
        <div className="color">
          <Circle
            disabled={true}
            onClick={handleClick}
            color={currentColor}
            size="4"
          />
        </div>
      </div>
      <div className="available-colors-container">
        {colors.map((color, i) => {
          return (
            <div key={i} className="square">
              <Circle key={i} onClick={handleClick} color={color} size="4" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AvailableColors;
