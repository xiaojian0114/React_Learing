import React, { useState } from "react";
import Input from "../Input";
import { notification } from "antd";
import "./BookInput.css"; // 引入样式文件

const BookInput = ({ onSubmitBook }) => {
  const [inputBookName, setInputBookName] = useState("");
  const [inputBookAuthor, setInputBookAuthor] = useState("");
  const [inputBookPublish, setInputBookPublish] = useState("");
  const [inputBookImage, setInputBookImage] = useState("");

  const handleNameChange = (newName) => {
    setInputBookName(newName);
  };

  const handleAuthorChange = (newAuthor) => {
    setInputBookAuthor(newAuthor);
  };

  const handlePublishChange = (newPublish) => {
    setInputBookPublish(newPublish);
  };

  const handleImageChange = (newImage) => {
    setInputBookImage(newImage);
  };

  const handleSubmit = () => {
    if (
      inputBookName &&
      inputBookAuthor &&
      inputBookPublish &&
      inputBookImage
    ) {
      const newBook = {
        name: inputBookName,
        image: inputBookImage,
        author: inputBookAuthor,
        publish: inputBookPublish,
      };
      onSubmitBook(newBook);
      setInputBookName("");
      setInputBookImage("");
      setInputBookAuthor("");
      setInputBookPublish("");
      notification.success({
        message: "书籍添加成功",
      });
    } else {
      notification.error({
        message: "请填写所有字段",
      });
    }
  };

  return (
    <div className="book-input-container">
      <h1>新增书籍</h1>
      <h3>
        书籍名称
        <Input onInputChange={handleNameChange} value={inputBookName} />
      </h3>
      <h3>
        书籍图片
        <Input onInputChange={handleImageChange} value={inputBookImage} />
      </h3>
      <h3>
        书籍作者
        <Input onInputChange={handleAuthorChange} value={inputBookAuthor} />
      </h3>
      <h3>
        书籍出版
        <Input onInputChange={handlePublishChange} value={inputBookPublish} />
      </h3>
      <h3>
        <button onClick={handleSubmit}>提交书籍</button>
      </h3>
    </div>
  );
};

export default BookInput;
