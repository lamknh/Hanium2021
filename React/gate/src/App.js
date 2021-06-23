import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Password from './components/Password';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    margin : 0 auto;
    padding : 0;
    box-sizing: border-box;
    background-color: rgb(46, 204, 113);
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Route path="/" exact={true} component={Main} />
        <Route path="/pwd" component={Password} />
      </div>
    </>
  );
}

export default App;
