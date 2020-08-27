import React from "react";
import Movie from "./Movie";
import classes from "./Movies.module.css";

function Movies ({ list , openPopup }) {
  let cards = <h1>Loading</h1>;
 
  if (list) {
    cards = list.map((result) =><div> <Movie key={result.id} item={result} openPopup = {openPopup}/></div>);
  }
  return (
    <div className={classes.Container}>
      <div className={classes.ContainerInner}>{cards}</div>
    </div>
  );
};

export default Movies;