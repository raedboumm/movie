import React from "react";

const Display = ({ title, description, posterURL, rating }) => {
  return (
    <div className="card">
      <div className="poster">
        <img src={posterURL} />
      </div>
      <div className="detail">
       <h1>{title}</h1> 
        <div className="rating">{rating}</div>
        <div className="info"><h3>{description}</h3>
</div>
      </div>
      

    </div>
  );
};

export default Display;
