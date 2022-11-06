import React, { useContext } from "react";
import { GameContext } from "../context/gameContext";

type ButtonProps = {
  size: string;
  color?: string;
};

function Circle(props: ButtonProps) {
  return (
    <button
      className="button"
      data-color={props.color}
      style={{
        backgroundColor: `${props.color || "#53483F"}`,
        width: `${props.size}rem`,
        minWidth: `${props.size}rem`,
        height: `${props.size}rem`,
        minHeight: `${props.size}rem`
      }}
    ></button>
  );
}

export default Circle;
