import { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]); // 将todos初始值设置为一个数组

  const handleDimmit = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, isCompleted: false }]);
      setInputValue(""); // 清空输入框
    }
  };

  const handleLine = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleDimmit} />
      <button onClick={handleAddTodo}>添加</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleLine(index)}>
              {todo.isCompleted ? "恢复" : "已完成"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
