import React from "react";
import Book from "./Book";

import classes from "./BookSummary.module.css";

function BookSummary(props) {
  return (
    <React.Fragment>
      <ul className={classes["book-summ"]}>
        {props.bookInfo.map(function (book) {
          return (
            <Book key={book.id} title={book.title} author={book.author}></Book>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BookSummary;
