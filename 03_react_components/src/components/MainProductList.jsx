import { Card } from "antd";
import { Avatar } from "antd";
import "./MainProductList.css";

const products = [
  {
    id: 1,
    name: "小王",
    description: "小王爱睡觉",
    avatar:
      "https://th.bing.com/th/id/OIP.PJtrOB9Qa0-tGaIsxrGYMwHaEo?w=202&h=126&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    backgroundImage:
      "https://th.bing.com/th/id/OIP.PJtrOB9Qa0-tGaIsxrGYMwHaEo?w=202&h=126&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 2,
    name: "小张",
    description: "小张爱吃饭",
    avatar:
      "https://th.bing.com/th/id/OIP.q576UJ3SoTxkTSX43Lh5xQHaDt?w=202&h=101&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    backgroundImage:
      "https://th.bing.com/th/id/OIP.q576UJ3SoTxkTSX43Lh5xQHaDt?w=202&h=101&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: 3,
    name: "小李",
    description: "小李爱小王",
    avatar:
      "https://th.bing.com/th/id/OIP.VwML0wJrLXZgvXQHlQE7sgHaEM?w=202&h=115&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    backgroundImage:
      "https://th.bing.com/th/id/OIP.VwML0wJrLXZgvXQHlQE7sgHaEM?w=202&h=115&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
];

const MainProductList = () => {
  return (
    <div className="main-product-list">
      <div className="card-container">
        {products.map((item, index) => (
          <Card
            key={item.id}
            cover={
              <img
                src={item.backgroundImage}
                alt="background-img"
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
            }
            style={{ width: 300, margin: "16px" }}
          >
            <Card.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.name}
              description={item.description}
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MainProductList;
