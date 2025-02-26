import BookInput from "./BookInput";
import BookList from "./BookList";
import { useState } from "react";
import "./BookApp.css";

import { Button } from "antd";

const BookApp = () => {
  const [displayBookInput, setDisplayBookInput] = useState(false);

  const [displayBookList, setDisplayBookList] = useState(false);

  const [books, setBooks] = useState([]);

  const handleSubmitBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleClickInput = () => {
    setDisplayBookInput(true);
    setDisplayBookList(false);
  };

  const handleClickList = () => {
    setDisplayBookList(true);
    setDisplayBookInput(false);
  };

  return (
    <div className="container">
      <div className="button-inline">
        <h1>
          <Button type="primary" onClick={handleClickInput}>
            添加书籍
          </Button>
        </h1>
        <h1>
          <Button type="default" onClick={handleClickList}>
            查询书籍
          </Button>
        </h1>
      </div>

      {displayBookInput && <BookInput onSubmitBook={handleSubmitBook} />}
      {displayBookList && <BookList books={books} />}
    </div>
  );
};

export default BookApp;
