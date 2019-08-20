import React, { useState } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import './App.css';
import StackedBar from './components/StackedBar';
import GroupedBar from './components/GroupedBar';
import LoginPanel from './components/LoginPanel';


const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql/'
})

const App = () => {

  const [screenState, setScreenState] = useState(true);
  const [loginState, setLoginState] = useState(true);

  const accountClick = ()=>{
    setScreenState(true);
  }

  const cashFlowClick = () => {
    setScreenState(false);
  }

  const clickLogin = () => {
    setLoginState(false);
  }

  return (
    <ApolloProvider client={client}>
        { loginState &&
          <div className="login-container">
            <LoginPanel clickLogin = {clickLogin} />
          </div>
        }
        {!loginState &&
          <>
            <nav className="nav-bar">
              <div className="main-nav">BFD</div>
              <div className="nav-item" onClick={accountClick}>Account Details</div>
              <div className="nav-item" onClick= {cashFlowClick}>Cash FLow</div>
              <div className="nav-name">Hi Aiswarya !</div>
              <div className="nav-item">Sign Out</div>
            </nav>
            <div className="app-container">
              {screenState &&
                <StackedBar/>
              }
              {!screenState &&
                <GroupedBar/>
              }
            </div>
          </>
        }
    </ApolloProvider>
  )
}
export default App;

