import React from "react";
import classes from "./Book.module.css";

function Book(props) {
  return (
    <React.Fragment>
      <li className={classes["list-title"]}>
        <h2>{props.title}</h2>
        <h3>{props.author}</h3>
      </li>
    </React.Fragment>
  );
}

export default Book;
