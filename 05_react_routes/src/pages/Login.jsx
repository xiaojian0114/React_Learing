import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 本地用户数据（模拟用户数据库）
  const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
  ];

  // 处理表单提交
  const handleLogin = (e) => {
    e.preventDefault();

    // 验证用户是否存在
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      // 登录成功，跳转到首页并存储用户信息
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      setError("用户名或密码错误！");
    }
  };

  return (
    <div className="login-container">
      <h2>登录</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">用户名</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">登录</button>
      </form>
    </div>
  );
};

export default Login;
