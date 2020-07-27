import React, { useState } from "react";

const SearchBar = (props) => {

  const [ movieName, setMovieName ] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onFormSubmit(movieName);
  }

  return(
      <form onSubmit={onFormSubmit} className="mt-4">
          <input
            type="text"
            className="form-control p-sm-4 p-xs-3"
            placeholder="Enter the Movie Name"
            onChange={(e) => setMovieName(e.target.value)}
            value={movieName}
          />
      </form>
  );

}

export default SearchBar;