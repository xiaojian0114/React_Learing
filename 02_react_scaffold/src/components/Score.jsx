import React from "react";
import "D:/大三下前端/React_Learning/02_react_scaffold/src/App.css"; // 引入样式文件

class Score extends React.Component {
  render() {
    const Subjects = [
      {
        id: 1,
        name: "高等数学",
        grade: 90,
      },
      {
        id: 2,
        name: "大学英语",
        grade: 88,
      },
      {
        id: 3,
        name: "程序设计",
        grade: 59,
      },
      {
        id: 4,
        name: "大学体育",
        grade: 61,
      },
    ];

    return (
      <div>
        <h2>成绩单</h2>
        <div className="item">
          {Subjects.map((item) => {
            const style = {
              color: item.grade > 60 ? "green" : "red",
            };
            return (
              <div className="item" key={item.id} style={style}>
                <h1>编号: {item.id}</h1>
                <h2>学科名： {item.name}</h2>
                <h3>
                  成绩： {item.grade}分 {item.grade > 60 ? "及格" : "未及格"}
                </h3>
                <h3>绩点：{item.grade > 60 ? (item.grade - 50) / 10 : 0} </h3>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Score;
