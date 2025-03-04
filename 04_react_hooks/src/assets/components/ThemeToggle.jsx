import { useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };
  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        就会被设计开发半年科技部的肌肤不好惹妇女都快疯了警方逮捕公费生废水人家给皇帝较低的v闹vjj
      </h2>
      <button onClick={toggleTheme}>
        切换到 {isDarkMode ? "白天" : "暗黑"} 模式
      </button>
    </div>
  );
};

export default ThemeToggle;
