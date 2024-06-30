import React from 'react'
import { Pagination } from 'react-bootstrap';

export const Paginated = ({ currentPage, totalPages, onPageChange }) => {
  const items = [];
  for (let number = 1; number <= totalPages; number++) {
      items.push(
          <Pagination.Item key={number} active={number === currentPage} onClick={() => onPageChange(number)}>
              {number}
          </Pagination.Item>
      );
  }

  return (
    <Pagination>{items}</Pagination>
  )
}





