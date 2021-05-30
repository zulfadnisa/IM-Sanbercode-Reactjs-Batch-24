import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import axios from "axios";
import "antd/dist/antd.css";
import './Register.css'
import { Form, Input, Button, Card, Modal } from "antd";
import icon from '../../img/register.jpg'
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Register = (props) => {
  const [, setUser] = useContext(UserContext);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log(values.name);
    axios
      .post("https://backendexample.sanbersy.com/api/register", {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      .then((res) => {
        var user = res.data.user;
        var token = res.data.token;
        var currentUser = { name: user.name, email: user.email, token };
        setUser(currentUser);
        localStorage.setItem("user", JSON.stringify(currentUser));
      })
      .catch((err) => {
        const error = JSON.parse(err.response.data)
        const keys = Object.keys(error).join(' & ')
          Modal.error({
            title: `ERROR ${keys.toUpperCase()}`,
            content: Object.values(error).join(' ')
          });
      });
  };

  return (
    <Card className='register-card'>
      <Form
        layout = 'vertical'
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
          residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "86",
        }}
        scrollToFirstError
        className='register-form'
      >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              required: true,
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              min:6,
              message: "The password must be at least 6 characters."
            }
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" className='register-form-button'>
            Register
          </Button>
        </Form.Item>
      </Form>
      <div className='icon'>
        <img src={icon} alt='login icon'/>
      </div>
    </Card>
  );
};
export default Register;
