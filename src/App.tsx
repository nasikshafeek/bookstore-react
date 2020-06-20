import React from 'react';
import './App.css';
import Book from "./components/Book/Book";
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
          <Route path="/fiction">
            <h1> Fiction </h1>
          </Route>
          <Route path="/">
            <CardColumns>
              <Book description={description}></Book>
              <Book description={description}></Book>
              <Book description={description}></Book>
              <Book description={description}></Book>
              <Book description={description}></Book>
              <Book description={description}></Book>
              <Book description={description}></Book>
              <Book description={description}></Book>
            </CardColumns>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
