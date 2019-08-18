import React from "react";
import loadingGif from "../images/gif/loading-arrow.gif";

const Loading = () => {
  return (
    <div className="loading">
      <div>Rooms data loading...</div>
      <img src={loadingGif} alt="loading" />
    </div>
  );
};

export default Loading;
