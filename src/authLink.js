import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export default authLink;