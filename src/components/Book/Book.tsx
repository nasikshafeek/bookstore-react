import React from 'react';

function Book(params: any) {
    return (
        <div className="Book">
            <img src="https://via.placeholder.com/250" alt=""/>
            <h3>Some book title</h3>
            <h5>{params.description}</h5>
        </div>
    );
}

export default Book;