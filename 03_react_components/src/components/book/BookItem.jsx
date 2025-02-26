import React from "react";
import { List, Card } from "antd";

const BookItem = ({ book, onClick }) => {
  return (
    <List.Item onClick={onClick} style={{ cursor: "pointer" }}>
      <Card
        hoverable
        title={book.name}
        extra={<span>{book.author}</span>}
        style={{ width: "300px", marginBottom: "15px" }}
      >
        <p>出版：{book.publish}</p>
        {book.image && (
          <img src={book.image} alt={book.name} style={{ width: "100px" }} />
        )}
      </Card>
    </List.Item>
  );
};

export default BookItem;
