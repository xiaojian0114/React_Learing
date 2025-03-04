import React from "react";
import { useUser } from "../context/UserContext";

const UserStatus = () => {
  const { user } = useUser(); // 获取当前的用户

  return <div>{user ? <p>当前用户：{user.username}</p> : <p>没有登录</p>}</div>;
};

export default UserStatus;
