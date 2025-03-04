import { useEffect, useState } from "react";

const ShowTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); //每秒更新

    return () => {
      clearInterval(intervalId); // 清理定时器
    };
  }, []); //只在启动执行

  const Time = `${time.getHours().toString().padStart(2, "0")}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}:${time.getSeconds().toString().padStart(2, "0")}`;

  return <div>{Time}</div>;
};

export default ShowTime;
