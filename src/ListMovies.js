import React from "react";

import MovieCard from "./MovieCard";

const ListMovies = (props) => {

  const listResults = () => {
    return props.movies.map((movie) => {
      return(
        <MovieCard key={movie.imdbID} poster={movie.Poster} year={movie.Year} title={movie.Title} />
      );
    });
  }


  return(
    <React.Fragment>
      <p className="h2 text-center pt-4">Look <a href="#list-movies">Here</a> For Your Search results</p>
      <div id="list-movies" className="list-movies d-flex flex-wrap justify-content-center mx-auto pt-5">
        {listResults()}
      </div>
    </React.Fragment>
  );

}

export default ListMovies;