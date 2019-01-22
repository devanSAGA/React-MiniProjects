import React from "react";
import "../styles/DisplayGIFs.css";

const DisplayGIFs = props => {
  return (
    <div className="gif-container">
      {props.data.map((gif_url, index) => {
        return <img key={index} src={gif_url} alt="gif" />;
      })}
    </div>
  );
};

export default DisplayGIFs;
