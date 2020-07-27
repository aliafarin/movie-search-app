import React, { useState, useEffect, useReducer } from "react";

import Header from "./Header";
import SearchBar from "./SearchBar";
import ListMovies from "./ListMovies";
import { OmdbApi } from "./api/OmdbApi";

const App = () => {

  const initialState = { movies: [] };

  const reducer = ( state, action ) => {
    switch(action.type) {

      case "RESPONSE_TRUE":
        return { ...state, movies: action.payload };

      case "RESPONSE_FALSE":
        return { ...state };
      
      default: 
        return state;
    }    
  }

  const [ state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    OmdbApi("godfather").then((response) => {
      return dispatch({ type: "RESPONSE_TRUE", payload: response.data.Search.splice(0, 3) })
    }); 
  }, []);

  const onFormSubmit = (movieName) => {
    if(movieName === ""){
      return dispatch({ type: "RESPONSE_FALSE" });
    }
    OmdbApi(movieName).then((response) => {
      console.log(response);
      if( response.data.Response === "True" ) {
        return dispatch({ type: "RESPONSE_TRUE", payload: response.data.Search });
      }
      else {
        return dispatch({ type: "RESPONSE_FALSE" });
      }
    });
  
  }


  return(
    <React.Fragment>
      <div className="con">
        <div className="dark-overlay">
          <div className="content p-5 mx-auto mt-5">
            <Header />
            <SearchBar onFormSubmit={onFormSubmit} />
          </div>
        </div>
      </div>
      <React.Fragment>
        <ListMovies movies={state.movies} />
      </React.Fragment>
    </React.Fragment>
  );

}

export default App;