import React from "react";
import Circle from "./Circle";

function AvailableColors() {
  return (
    <div className="available-colors-container">
      <div className="square">
        <Circle color="#D00000" size="4" />
      </div>
      <div className="square">
        <Circle color="#FFBA08" size="4" />
      </div>
      <div className="square">
        <Circle color="#410FE6" size="4" />
      </div>
      <div className="square">
        <Circle color="#0F1A20" size="4" />
      </div>
      <div className="square">
        <Circle color="#E000C2" size="4" />
      </div>
      <div className="square">
        <Circle color="#2C6E49" size="4" />
      </div>
    </div>
  );
}

export default AvailableColors;
