
import React from "react";
import Book from "../../Book/Book";
import { CardColumns } from "react-bootstrap";

function Romantic(params: any) {
    return (
        <div>
            <h1>Romantic books</h1>
            <CardColumns>
                <Book></Book>
                <Book></Book>
                <Book></Book>
                <Book></Book>
            </CardColumns>
        </div>
    );
}

export default Romantic;