import Input from "./Input";
import { useState } from "react";

const UserRegister = ({ onClick }) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleInputChange = (newEmail) => {
    setInputEmail(newEmail);
  };

  const handlePasswordChange = (newPassword) => {
    setInputPassword(newPassword);
  };

  return (
    <>
      <h3>账户：</h3>
      <Input onInputChange={handleInputChange} />
      <h3>密码：</h3>
      <Input onInputChange={handlePasswordChange} />
      <h3>
        <button onClick={onClick}>注册</button>
        <h3>提交数据：</h3>
        <h3>账户：{inputEmail}</h3>
        <h3>密码：{inputPassword}</h3>
      </h3>
    </>
  );
};

export default UserRegister;
