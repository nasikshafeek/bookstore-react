import React from "react";
import { CardColumns } from "react-bootstrap";
import Book from "../../Book/Book";

function All(params: any) {
    const books = params.books
    const bookList = books.map((book: any) => {
        return (<Book key={book.id} {...book} />)
    })
    return (
        <CardColumns>
            { bookList }
        </CardColumns>
    );
}

export default All;