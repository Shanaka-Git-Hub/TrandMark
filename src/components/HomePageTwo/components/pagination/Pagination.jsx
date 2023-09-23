import Pagination from 'react-bootstrap/Pagination';


import React from 'react'

export default function PaginationTab() {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 10; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div>
            <Pagination>{items}</Pagination>
        </div>
    )
}