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

  const accountClick = ()=>{
    setScreenState(true);
  }

  const cashFlowClick = () => {
    setScreenState(false);
  }

  return (
    <ApolloProvider client={client}>
      <React.Fragment>
        <nav className="nav-bar">
          <div className="main-nav">BFD</div>
          <div className="nav-item" onClick={accountClick}>Account Details</div>
          <div className="nav-item" onClick= {cashFlowClick}>Cash FLow</div>
        </nav>
        <div className="app-container">
          {screenState &&
            <StackedBar/>
          }
          {!screenState &&
            <GroupedBar/>
          }
        </div>
      </React.Fragment>
    </ApolloProvider>
  )
}
export default App;

