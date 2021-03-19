import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({bColor, getColor}) {
  return <div className="child" style={{ backgroundColor: bColor }} onClick={getColor} />;
}

export default Child;
