import React, { useRef } from "react";
import classes from "./AddBook.module.css";

function AddBook(props) {
  const bookTitleInput = useRef();
  const bookAuthorInput = useRef();

  const addBookSubmitHandler = function (e) {
    e.preventDefault();

    if (bookTitleInput.current.value === "") {
      alert("Please Enter In A Book Title.");
      return;
    }

    if (bookAuthorInput.current.value === "") {
      alert("Please Enter In A Authors Name.");
      return;
    }

    const bookData = {
      title: bookTitleInput.current.value,
      author: bookAuthorInput.current.value,
    };

    props.onAddBook(bookData);

    bookTitleInput.current.value = "";
    bookAuthorInput.current.value = "";
  };

  return (
    <React.Fragment>
      <form className={classes["form-overall"]} onSubmit={addBookSubmitHandler}>
        <div className={classes["form-sect"]}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" ref={bookTitleInput} />
        </div>
        <div className={classes["form-sect"]}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={bookAuthorInput} />
        </div>
        <div className={classes["form-sect_btn"]}>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </React.Fragment>
  );
}

export default AddBook;
