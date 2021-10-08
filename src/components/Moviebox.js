import React from "react";
import "./Moviebox.css"

const IMG_API="https://image.tmdb.org/t/p/w1280"

const Moviebox=(props)=>{
  let  {title,overview,release_date,poster_path,vote_average} = props;
    return(
<div class="movie">
  <div className="popularity text-center">
  <h3>{title}</h3>
  </div>
  <img src={IMG_API+poster_path} class="card-img-top" alt="..."/>
  <div className="Movie-info">
    <h5>{title}</h5>
    <span>{vote_average}</span>
    </div>
    <div className="movie-overview">
      <h3>Overview:</h3>
      <p>{overview}</p>
    </div>
    <p className="card-text"><small className="text-muted">Release Date: {release_date}</small></p>
    </div>
    )
}

export default Moviebox

