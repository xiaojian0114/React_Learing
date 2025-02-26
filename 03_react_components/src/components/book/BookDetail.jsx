import React from "react";
import { Modal, Button } from "antd";

const BookDetail = ({ book, onClose }) => {
  return (
    <Modal
      title="书籍详情"
      visible={!!book}
      onCancel={onClose}
      footer={[
        <Button key="close" onClick={onClose}>
          关闭
        </Button>,
      ]}
    >
      {book && (
        <div>
          <h2>书籍名称：{book.name}</h2>
          <h4>作者：{book.author}</h4>
          <p>出版：{book.publish}</p>

          {book.description && <p>描述：{book.description}</p>}

          {book.image && (
            <div>
              <img
                src={book.image}
                alt={book.name}
                style={{ width: "200px", height: "auto", marginTop: "10px" }}
              />
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default BookDetail;
