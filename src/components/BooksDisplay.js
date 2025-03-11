import React, { useState } from "react";
import { mockData } from "../mockdata/mock.js";
import "./BooksDisplay.css";

const BooksDisplay = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([...mockData]);

  const searchHandler = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearch(searchValue);
    const filteredBooks = mockData.filter((book) => {
      if (Array.isArray(book.genre)) {
        return book.genre.some((genre) =>
          genre.toLowerCase().includes(searchValue)
        );
      }
      return book.genre.toLowerCase().includes(searchValue);
    });
    console.log("filtered books", filteredBooks);

    setBookData(filteredBooks);
  };
  const sortHandler = (order) => {
    const bookDataCopy = [...bookData];
    if (order === "ascending") {
      bookDataCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else if (order === "descending") {
      bookDataCopy.sort((a, b) => b.title.localeCompare(a.title));
    }
    setBookData(bookDataCopy);
  };
  return (
    <>
      <input
        type="text"
        placeholder="search by genre"
        value={search}
        onChange={searchHandler}
        className="search-input"
      />
      <button className="sort-button" onClick={() => sortHandler("ascending")}>
        A...Z
      </button>
      <button className="sort-button" onClick={() => sortHandler("descending")}>
        Z...A
      </button>
      <div className="books-container">
        {bookData?.map((book) => {
          return (
            <>
              <div className="book-card" key={book.id}>
                <img
                  src={book.cover_image}
                  alt={book.title}
                  className="book-image"
                />
                <div className="book-info">
                  <h2 className="book-title">{book.title}</h2>
                  <p className="book-author">by {book.author}</p>
                  <p className="book-year">{book.publication_year}</p>
                  <div className="book-genre">
                    {Array.isArray(book.genre) ? (
                      book.genre.map((genre, index) => (
                        <span className="genre-tag" key={index}>
                          {genre}
                        </span>
                      ))
                    ) : (
                      <span className="genre-tag">{book.genre}</span>
                    )}
                  </div>
                  <p className="book-description">{book.description}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default BooksDisplay;
