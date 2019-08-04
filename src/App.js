import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import StackedBar from './components/StackedBar';
import GroupedBar from './components/GroupedBar';


const client = new ApolloClient({
  uri: 'http://localhost:60447/graphql/'
})

const App = () => {

  const [screenState, setScreenState] = useState(true);

  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        {screenState &&
          <StackedBar/>
        }
        {!screenState &&
          <GroupedBar/>
        }
      </div>
    </ApolloProvider>
  )
}
export default App;

