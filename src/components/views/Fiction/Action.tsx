
import React from "react";
import Book from "../../Book/Book";
import { CardColumns } from "react-bootstrap";

function Action(params: any) {
    return (
        <div>
            <h1>Action books</h1>
            <CardColumns>
                <Book></Book>
                <Book></Book>
                <Book></Book>
                <Book></Book>
                <Book></Book>
                <Book></Book>
            </CardColumns>
        </div>
    );
}

export default Action;