import React from "react";

const Square = props => {
  const randomRGB = () => {
    const rand = () => Math.floor(Math.random() * 255);
    return `rgb(${rand()},${rand()},${rand()})`;
  };

  return <div className="square" style={{ background: randomRGB() }} />;
};

export default Square;
