import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";
import BookDetails from "./BookDetails";
import { useState } from "react";

const BookList = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);
  const [selected, setSelected] = useState(null);

  function displayBooks() {
    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error</p>;
    //   console.log(data);
    return data.books.map((book) => (
      <li
        key={book.id}
        // does something when book name is selected
        onClick={() => {
          setSelected(book.id);
        }}
      >
        {book.name}
      </li>
    ));
  }

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      {selected ? (
        <BookDetails bookId={selected} />
      ) : (
        <div>No book has been selected.</div>
      )}
    </div>
  );
};

export default BookList;
