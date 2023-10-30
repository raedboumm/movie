import React from "react";
import { useNavigate } from "react-router-dom";

const Display = ({ title, description, posterURL, rating }) => {
  const navigate=useNavigate();

  return (
    <div className="card" onClick={()=> {navigate(`/movie/${title}`)}}>
      <div className="poster" >
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
