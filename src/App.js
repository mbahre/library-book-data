import React, { useState } from "react";
import BookSummary from "./components/BookSummary";

import "./App.css";
import AddBook from "./components/AddBook";

function App() {
  const [newBook, setNewBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // send GET request in findBookHandler funct
  const findBookHandler = async function () {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-prac-default-rtdb.firebaseio.com/books.json"
      );

      if (!response.ok) {
        return new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      const booksInfo = [];

      for (const key in data) {
        booksInfo.push({
          id: key,
          title: data[key].title,
          author: data[key].author,
        });
      }

      setNewBook(booksInfo);
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  // send POST request in addBookHandler funct
  const addBookHandler = async function (book) {
    const response = await fetch(
      "https://react-http-prac-default-rtdb.firebaseio.com/books.json",
      {
        method: "POST",
        body: JSON.stringify(book),
        headers: { "Content-Type": "application/json" },
      }
    );

    const data = await response.json();

    console.log(data);
  };

  return (
    <React.Fragment>
      <section>
        <AddBook onAddBook={addBookHandler}></AddBook>
      </section>
      <section>
        <button onClick={findBookHandler}>Find Books</button>
      </section>
      <section>
        {!loading && newBook.length > 0 && (
          <BookSummary bookInfo={newBook}></BookSummary>
        )}
        {!loading && !error && newBook.length === 0 && <h2>No Books Found</h2>}
        {error && <h2>{error}</h2>}
        {loading && <h2>Loading...</h2>}
      </section>
    </React.Fragment>
  );
}

export default App;
