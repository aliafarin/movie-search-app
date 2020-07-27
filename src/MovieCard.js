import React from "react";

const MovieCard = (props) => {

  return(
    <div className="card m-3" style={{width: "18rem"}}>
      <img src={props.poster} className="card-img-top" style={{height: "400px"}} alt={`${props.title}`} />
      <div className="card-body">
        <h5 className="card-title">{props.year}</h5>
        <p className="card-text">{props.title}</p>
      </div>
    </div>
  );

}

export default MovieCard;