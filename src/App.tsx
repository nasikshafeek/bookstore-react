import React from 'react';
import './App.css';
import All from "./components/views/All/All";
import { default as FictionAll } from "./components/views/Fiction/All";
import { Container, Row, CardGroup, CardDeck, CardColumns } from "react-bootstrap";
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  let description = "Hello there is a nice text"
  return (
    <div>
      <Header></Header>
      <Container fluid="lg">
        <Switch>
          <Route path="/references">
            <h1> References </h1>
          </Route>
          <Route path="/fiction" component={ FictionAll } />
          <Route path="/">
            <All description="Some description" />
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
