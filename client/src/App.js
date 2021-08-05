import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import Form from "./components/Form";

// create error handler for connection linking, then connect it to the client
const errorLink = onError(({graphqlErrors, networkErrors}) => {
  if(graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from ([
  errorLink,
  new HttpLink({uri: "http://localhost:6969/graphql"})
]);

// create a connection
const client = new ApolloClient({
  cache: new InMemoryCache(),
  // link to our backend or server, build http for this
  link: link
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Form/>
    </ApolloProvider>
  );
}

export default App;
