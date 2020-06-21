import React from "react";
import Book from "../../Book/Book";
import { Route, match } from "react-router-dom";
import { CardColumns } from "react-bootstrap";

const All = (url: any) => {
    console.log(url.match.url);
    return (
        <div>
            <Route path="/references">
                <h1>All References</h1>
                <CardColumns>
                    <Book></Book>
                </CardColumns>
            </Route>
        </div>
    );
}

export default All;