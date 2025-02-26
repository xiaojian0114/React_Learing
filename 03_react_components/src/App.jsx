// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import RandomName from "./components/RandomName";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Main from "./components/main";
// import Button from "./components/Button";
// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";

// import UserRegister from "./components/UserRegister";

import Card from "./components/card/Card";

const App = () => {
  // const handleClick = () => {};

  return (
    <>
      {/* <WelcomeFunc
        name="张三"
        age="12"
        image="https://avatars.githubusercontent.com/u/114008889?v=4"
      /> */}
      {/* 
      <RandomName /> */}
      {/* <Header />
      <Main />
      <Footer /> */}
      {/* <Button myClick={handleClick} /> */}
      {/* <Button1 onClick={handleClick} /> */}
      {/* 
      <UserRegister onClick={handleClick} /> */}
      <Card
        header={<h1>这是卡片标题</h1>}
        body={
          <i>
            这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容
            这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容这是卡片内容
          </i>
        }
        footer={<button>这是按钮</button>}
      />
    </>
  );
};

export default App;
