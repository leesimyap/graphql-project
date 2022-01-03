import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

// Apollo client set up https://www.apollographql.com/docs/react/get-started/
// Apollo is a GraphQL client that helps the FE make requests to server. It is used with React/vueJS.
// After Apollo receives response back from server, it passes the response back to React
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
