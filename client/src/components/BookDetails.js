import { GET_BOOK } from "../queries/queries";
import { useQuery } from "@apollo/client";
import { useState } from "react";

const BookDetails = ({ bookId }) => {
  //   console.log(bookId);
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: bookId },
  });

  function displayBookDetails() {
    if (loading) return <div>Loading Book Details...</div>;
    if (error) return <p>Error</p>;
    
    // if there there no error or loading, display book details
    const { book } = data; // assign data to book to solve "undefined" object
    // console.log(`book.name : ${book.name}`)
    return (
      <div>
        <h2>{book.name}</h2>
        <p>{book.genre}</p>
        <p>{book.author.name}</p>
        <p>All books by this author:</p>
        <ul className="other-books">
          {book.author.books.map((item) => {
            return <li key={item.id}>{item.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  return <div id="book-details">{displayBookDetails()}</div>;
};

export default BookDetails;
