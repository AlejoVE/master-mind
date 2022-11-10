import React, { useContext } from "react";
import Circle from "./Circle";
import { GameContext } from "../context/gameContext";
import { Colors } from "../types/types";

function AvailableColors() {
  {
    /* indication which color is selected */
  }
  const { setCurrentColor, currentColor } = useContext(GameContext);
  const colors = Object.values(Colors);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const color: string = (e.target as HTMLButtonElement).getAttribute(
      "data-color"
    ) as string;
    setCurrentColor(color);
  };

  return (
    <>
      {/* indication which color is selected */}
      <Circle
        disabled={true}
        onClick={handleClick}
        color={currentColor}
        size="4"
      />
      <div className="available-colors-container">
        {colors.map(color => {
          return (
            <div className="square">
              <Circle onClick={handleClick} color={color} size="4" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AvailableColors;
