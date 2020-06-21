import React from 'react';
import './App.css';
import All from "./components/views/All/All";
import { default as FictionAll } from "./components/views/Fiction/All";
import { default as AllReferences } from "./components/views/References/All";
import { Container } from "react-bootstrap";
import Header from './components/Header/Header';
import { Switch, Route } from 'react-router-dom';

function App() {
  const books = [
    {
      id: 1,
      name: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      price: 13,
      description: "The wonderful saga's first edition"
    },
    {
      id: 2,
      name: "Harry Potter and the Order of the Pheonix",
      author: "J.K. Rowling",
      price: 13,
      description: "The wonderful saga's fifth edition"
    },
    {
      id: 3,
      name: "Flawed",
      author: "Cecilia Ahern",
      price: 19,
      description: "The wonderful post modern dystopian story starts which has got a huge reception from the audience around the world."
    },
    {
      id: 4,
      name: "Perfect",
      author: "Cecilia Ahern",
      price: 18,
      description: "A perfect ending to the dystopian story"
    },
  ]
  return (
    <div>
      <Header></Header>
      <Container fluid="lg">
        <Switch>
          <Route path="/references" component={ AllReferences } />
          <Route path="/fiction" component={ FictionAll } />
          <Route path="/">
            <All books={ books }/>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
