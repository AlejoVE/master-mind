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
      <Row />
      <Row />
      <Row />
      <Row />
      <Row />
      <AvailableColors />
    </div>
  );
}

export default GamePage;
