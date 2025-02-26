import Input from "./Input";

import { useState } from "react";

const InputParent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (newVal) => {
    //更新组件状态
    setInputValue(newVal);
  };

  return (
    <>
      <h2>输入的值：{inputValue}</h2>
      <Input onInputChange={handleInputChange} />
    </>
  );
};

export default InputParent;
