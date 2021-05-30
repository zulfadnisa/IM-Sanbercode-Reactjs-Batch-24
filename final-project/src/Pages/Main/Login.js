import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import "antd/dist/antd.css";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";
import icon from '../../img/login.jpg'

const Login = () => {
  const [, setUser] = useContext(UserContext);
  const onFinish = (values) => {
    axios
      .post("https://backendexample.sanbersy.com/api/user-login", {
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        var currentUser = { name: user.name, email: user.email,password: user.email, token };
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  };

  return (
    <Card className="login-card">
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
            {
              min: 6,
              message: "The password must be at least 6 characters.",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log In
          </Button>
          <div className='register'>
            No account? <a href="/register">register now!</a>
          </div>
        </Form.Item>
      </Form>
      <div className='icon'>
        <img src={icon} alt='login icon'/>
      </div>
    </Card>
  );
};

export default Login;
