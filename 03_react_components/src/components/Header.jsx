import { Button } from "antd";
import {
  DesktopOutlined,
  CopyOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "pink",
        height: 70,
      }}
    >
      <Button type="link">
        {" "}
        <DesktopOutlined />
        首页
      </Button>
      <Button type="link">
        {" "}
        <CopyOutlined />
        邮件
      </Button>
      <Button type="link">
        {" "}
        <SettingOutlined />
        设置
      </Button>
    </div>
  );
};

export default Header;
