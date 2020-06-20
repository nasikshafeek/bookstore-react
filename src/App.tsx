import React from 'react';
import './App.css';
import Book from "./components/Book/Book";
import { Container, Row, CardGroup, CardDeck, CardColumns } from "react-bootstrap";

function App() {
  let description = "Hello there is a nice text"
  return (
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
  );
}

export default App;
