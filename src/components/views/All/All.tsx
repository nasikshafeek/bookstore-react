import React from "react";
import { CardColumns } from "react-bootstrap";
import Book from "../../Book/Book";

function All(params: any) {
    const description = params.description
    return (
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
    );
}

export default All;