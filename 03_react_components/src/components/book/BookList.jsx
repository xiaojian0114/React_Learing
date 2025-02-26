import React, { useState } from "react";
import BookItem from "./BookItem";
import BookDetail from "./BookDetail";

const BookList = ({ books }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleCloseDetail = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      {selectedBook ? (
        <BookDetail book={selectedBook} onClose={handleCloseDetail} />
      ) : (
        <div>
          <h1>书籍列表</h1>
          <ul>
            {books.map((book, index) => (
              <BookItem
                key={index}
                book={book}
                onClick={() => handleSelectBook(book)} // 点击时选择书籍
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BookList;
