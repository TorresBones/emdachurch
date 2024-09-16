import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
import authLink from './authLink';
import { Header } from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


import './styles/App.css';


const httpLink = createHttpLink({
  uri: "/graphql",
});

// const authLink = setContext((_, { headers }) => {

//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      < Header />
      < Navbar />
      < Outlet />
      < Footer />
    </ApolloProvider>
  );
}

export default App;
