import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";
import { Card, Typography, Tag, Row, Col, Space } from "antd";
import { LikeOutlined, EyeOutlined } from "@ant-design/icons";
import "./BlogDetails.css"; // 可根据需要自行修改样式

const { Title, Paragraph } = Typography;

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  return (
    <div className="blog-details-container">
      <Card
        bordered={false}
        cover={<img alt="blog-cover" src={blog.image} />}
        style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}
      >
        <Title level={2}>{blog.title}</Title>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Paragraph strong>作者：{blog.author}</Paragraph>
            </Col>
            <Col>
              <Space>
                <EyeOutlined />
                <span>{blog.views}</span>
                <LikeOutlined />
                <span>{blog.likes}</span>
              </Space>
            </Col>
          </Row>
          <Paragraph>{blog.content}</Paragraph>
          <Space wrap>
            {blog.tags.map((tag, index) => (
              <Tag color="blue" key={index}>
                {tag}
              </Tag>
            ))}
          </Space>
        </Space>
      </Card>
    </div>
  );
};

export default BlogDetails;
