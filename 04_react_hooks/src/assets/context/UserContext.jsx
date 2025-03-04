import { createContext, useContext, useState } from "react";

// 创建并导出 UserContext
export const UserContext = createContext();

// 提供用户上下文的 Provider 组件
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 登录函数
  const login = (username) => {
    setUser({ username });
  };

  // 登出函数
  const logout = () => {
    setUser(null);
  };

  // 通过 Context.Provider 将状态传递给子组件
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// 自定义 Hook 获取 UserContext 值
export const useUser = () => useContext(UserContext);
