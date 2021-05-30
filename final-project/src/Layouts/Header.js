import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import "antd/dist/antd.css";
import { Layout, Menu, Dropdown,Button } from "antd";
import style from "./layout.module.css";
import logo from "../img/logo.png";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const Header = () => {
  const { Header } = Layout;
  const [user, setUser] = useContext(UserContext);
  let history = useHistory();
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };
  const handlePassword = () => {
    history.push("/edit");
  };
  const onClick = ({ key }) => {
    console.log(key);
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1" onClick={handlePassword}>
        Change Password
      </Menu.Item>
      <Menu.Item key="2" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%", padding: 0 }}>
      <div className={style.logo}>
        <img src={logo} alt="icon" />
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        {user ? (
          <>
            <Menu.Item key="2">
              <Link to="/movies">Movie List</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/games">Game List</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/create">Create</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  href='/'
                  onClick={(e) => e.preventDefault()}
                >
                  <UserOutlined/>
                  {user.name} <DownOutlined />
                </a>
              </Dropdown>
            </Menu.Item>
          </>
        ) : (
          <>
            <Menu.Item key="6">
              <Link to="/login">Sign In</Link>
            </Menu.Item>
            <Menu.Item key="7" className={style.diff}>
            <Button className={style.button}><Link to="/register" className={style.button}>SIGN UP</Link></Button>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default Header;
