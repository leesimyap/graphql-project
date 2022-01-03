import { gql } from "@apollo/client";

// https://www.freecodecamp.org/news/react-apollo-client-2020-tutorial/
// query
const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

const GET_BOOK = gql`
  query ($id: ID!) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

// mutation
const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

// subscription

export { GET_BOOKS, GET_AUTHORS, ADD_BOOK, GET_BOOK };
