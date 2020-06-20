import React from 'react';
import { Card, Button } from "react-bootstrap";

function Book(params: any) {
return  (<Card className="p-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://via.placeholder.com/250" />
                <Card.Body>
                    <Card.Title>Some book title</Card.Title>
                    <Card.Text>{ params.description }</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    );
}

export default Book;