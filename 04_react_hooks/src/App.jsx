import React from "react";
import { UserProvider } from "./assets/context/UserContext";
import LoginForm from "./assets/components/LoginForm";
import UserStatus from "./assets/components/UserStatus";
// import UserPage from "./assets/components/UserPage";
// import ThemeButton from "./assets/components/ThemeButton";
// import ThemeProvider from "./assets/components/ThemeProvider";
// import ThemeToggle from "./assets/components/ThemeToggle";
// import TextInput from "./assets/components/TextInput";
// import TodoIist from "./assets/components/TodoIist";
// import PageTitle from "./assets/components/PageTitle";
// import FetchData from "./assets/components/FetchData";
// import ShowTime from "./assets/components/ShowTime";

const App = () => {
  return (
    <>
      <UserProvider>
        <div>
          <h1>用户登录状态管理</h1>
          <LoginForm />
          <UserStatus />
        </div>
      </UserProvider>
    </>
  );
};

export default App;
