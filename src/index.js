import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import {Provider} from 'react-redux'
import store from './store'


const link = new HttpLink({ uri: 'http://localhost:3000/graphql' })
const cache = new InMemoryCache()

const client = new ApolloClient({
  link,
  cache
})


ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
