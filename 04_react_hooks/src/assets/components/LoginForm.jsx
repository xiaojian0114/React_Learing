import React, { useState } from "react";
import { useUser } from "../context/UserContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // 新增密码状态
  const { user, login, logout } = useUser(); // 获取 user、login 和 logout

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      login(username); // 登录时只需要用户名
    } else {
      alert("请输入用户名和密码");
    }
  };

  const handleLogout = () => {
    logout(); // 调用 logout 函数
  };

  return (
    <div>
      {user ? (
        <div>
          <p>欢迎，{user.username}！</p>
          <button onClick={handleLogout}>登出</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">用户名：</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="请输入用户名"
              required
            />
          </div>
          <div>
            <label htmlFor="password">密码：</label>
            <input
              type="password" // 密码输入框
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入密码"
              required
            />
          </div>
          <button type="submit">登录</button>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
