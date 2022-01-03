import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK, GET_BOOKS } from "../queries/queries";
import { useState } from "react";

// Get all authors and display it in the drop down menu
const AddBook = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [authorId, setAuthorId] = useState("");
  const { loading, error, data } = useQuery(GET_AUTHORS);
  const [addBook] = useMutation(ADD_BOOK);

  function displayAuthors() {
    if (loading) return <option disabled>Loading Authors...</option>;
    if (error) return <p>Error</p>;

    return data.authors.map((author) => (
      <option key={author.id} value={author.id}>
        {author.name}
      </option>
    ));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, genre, authorId });
    console.log("calling addBook");
    console.log("authorId: " + authorId);
    addBook({
      variables: { name, genre, authorId },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };

  return (
    <form id="add-book" onSubmit={onSubmit}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>

      <div className="field">
        <label>Author:</label>
        <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
          <option>Select Author</option>
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
