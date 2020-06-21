import React from "react";
import Book from "../../Book/Book";
import { Route, match } from "react-router-dom";
import Action from "./Action";
import { CardColumns } from "react-bootstrap";
import Fantasy from "./Fantasy";
import Romantic from "./Romantic";

const All = (url: any) => {
    console.log(url.match.url);
    return (
        <div>
            <Route path={url.match.url + "/action"} component={Action}/>
            <Route path={url.match.url + "/fantasy"} component={Fantasy}/>
            <Route path={url.match.url + "/romantic"} component={Romantic}/>
            <Route path={url.match.url + "/all"}>
                <h1>All Fiction</h1>
                <CardColumns>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                    <Book></Book>
                </CardColumns>
            </Route>
        </div>
    );
}

export default All;