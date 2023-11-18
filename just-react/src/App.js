import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from './Components/Header';
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <AppContainer className="app">
      <Header />
      <AppBody>
        <Sidebar />
        
      </AppBody>

    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: lightblue;
`;

const AppBody = styled.div``;