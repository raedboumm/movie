import React from "react";
import { useParams,link } from "react-router";
import { Link } from "react-router-dom";

const OneMovie = (props) => {
  const parm = useParams();
  const name = parm.name;
  const findmovie = props.movie.find((el) => el.title === name);

  return (
    <div style={{ color: "white", zIndex: 20,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:50 }}>
      <div className="titre_m">{findmovie.title}</div>

      <div className="video_m">{findmovie.trailer}</div>
      <div className="description_m">{findmovie.description}</div>
      <Link to="/movie"><button>Back</button></Link>
    </div>
  );
};

export default OneMovie;
