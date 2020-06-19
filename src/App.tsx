import React from 'react';
import logo from './logo.svg';
import './App.css';
import Book from "./components/Book/Book";

function App() {
    const description = "Hello there is a nice text"
  return (
    <div className="App">
      <Book description={description}></Book>
    </div>
  );
}

export default App;
