
import React from "react";
import Book from "../../Book/Book";
import { CardColumns } from "react-bootstrap";

function Fantasy(params: any) {
    return (
        <div>
            <h1>Fantasy books</h1>
            <CardColumns>
                <Book></Book>
                <Book></Book>
            </CardColumns>
        </div>
    );
}

export default Fantasy;