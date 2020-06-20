import React from 'react';
import './App.css';
import Book from "./components/Book/Book";
import { Container, Row, CardGroup, CardDeck, CardColumns } from "react-bootstrap";
import Header from './components/Header/Header';

function App() {
  let description = "Hello there is a nice text"
  return (
    <div>
      <Header></Header>
      <Container fluid="lg">
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
      </Container>
    </div>
  );
}

export default App;
