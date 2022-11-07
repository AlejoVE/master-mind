import React, { useState } from "react";
import AvailableColors from "./AvailableColors";
import Circle from "./Circle";
import Row from "./Row";

enum Colors {
  BLUE = "blue",
  RED = "red",
  GREEN = "green",
  BLACK = "black"
}

function GamePage() {
  const colors = Object.values(Colors);
  const [currentColor, setCurrentColor] = useState<string>("");
  return (
    <div className="page-content">
      {/* Size in rem */}
      <Row id="row-1" />
      <Row id="row-2" />
      <Row id="row-3" />
      <Row id="row-4" />
      <Row id="row-5" />
      <AvailableColors />
    </div>
  );
}

export default GamePage;
