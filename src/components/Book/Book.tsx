import React from 'react';
import { Card, Button } from "react-bootstrap";

function Book(props: any) {
    return (
        <Card className="p-2" style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://via.placeholder.com/250" />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <Card.Text>{props.price}</Card.Text>
                <Button variant="primary">Add To Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default Book;