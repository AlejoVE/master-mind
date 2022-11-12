import React, { useContext, useRef } from "react";
import Circle from "./Circle";
import { GameContext } from "../context/gameContext";
import {
  changeButtonColor,
  checkAnswers,
  getRowColors
} from "../helpers/helpers";
import { useState } from "react";
import { triggerGameOverModal } from "../helpers/helpers";

function Row() {
  const {
    currentColor,
    currentCode,
    setGameOver,
    setAvailableRows,
    availableRows,
    gameOver,
    setStartTimer
  } = useContext(GameContext);
  const rowEl = useRef<HTMLDivElement>(null);
  const gridEl = useRef<HTMLDivElement>(null);
  const [displayCheckButton, setDisplayCheckButton] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const slots = Array.from(Array(4).keys());

  // Change  button color
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (gameOver) return;
    if (currentColor) {
      changeButtonColor(e, currentColor);
    }
    const userAnswers = getRowColors(rowEl);
    if (userAnswers.length === currentCode.length) {
      setDisplayCheckButton(true);
    }
  };

  const checkUserAnswers = () => {
    const rowsLeft = availableRows - 1;
    setAvailableRows(rowsLeft);
    setDisplayCheckButton(false);
    setDisabled(true);
    const gameOver = checkAnswers(rowEl, gridEl, currentCode);

    if (gameOver) {
      setGameOver(true);
      setStartTimer(false);
    }

    if (!gameOver && rowsLeft <= 0) {
      triggerGameOverModal();
      setGameOver(true);
      setStartTimer(false);
    }
  };

  return (
    <div className="row-main">
      <div className="row-main-container">
        <div className="row-circles-container">
          <div ref={rowEl}>
            {slots.map((row, i) => {
              return (
                <Circle
                  key={i}
                  gameOver={gameOver}
                  disabled={disabled}
                  onClick={handleClick}
                  size="3"
                />
              );
            })}
          </div>
          {displayCheckButton && !gameOver && (
            <button onClick={checkUserAnswers} className="check-button">
              Check
            </button>
          )}
        </div>
        {/* response */}
        <div ref={gridEl} className="row-grid">
          {slots.map((row, i) => {
            return (
              <Circle
                key={i}
                gameOver={gameOver}
                disabled={true}
                size="1.2"
                class="check"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Row;
