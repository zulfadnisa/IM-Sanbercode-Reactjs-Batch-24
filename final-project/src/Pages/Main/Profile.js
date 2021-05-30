import React from "react";
import axios from "axios";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import { Card, Form, Input, Button, Breadcrumb, Modal } from "antd";
import "./Login.css";
import icon from "../../img/login.jpg";
import { HomeOutlined } from "@ant-design/icons";

const Profile = (props) => {
  const [form] = Form.useForm();
  const [user] = React.useContext(UserContext);
  let token = user ? user.token : null;
  let history = useHistory();
  const onFinish = (values) => {
    console.log(values);
    const newData = {
      current_password: values.current_password,
      new_password: values.new_password,
      new_confirm_password: values.new_confirm_password,
    };
    if (user) {
      axios
        .post(
          `https://backendexample.sanbersy.com/api/change-password`,
          newData,
          {
            headers: { Authorization: "Bearer " + token },
          }
        )
        .then((res) => {
          history.push("/");
        })
        .catch((err) => {
          const error = JSON.parse(err.response.data)
          const keys = Object.keys(error).join(' & ')
            Modal.error({
              title: `ERROR ${keys.toUpperCase()}`,
              content: Object.values(error).join(' ')
            });
        });
    }
  };
  const handleHome = () => {
    history.push(`/`);
  };
  return (
    <>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item onClick={handleHome}>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Change Password</Breadcrumb.Item>
      </Breadcrumb>
      <Card className="login-card">
        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="login-form"
        >
          <Form.Item
            name="current_password"
            label="Current Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "The password must be at least 6 characters.",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="new_password"
            label="New Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
              {
                min: 6,
                message: "The password must be at least 6 characters.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("current_password") !== value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "New password cannot be the same as current password."
                    )
                  );
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="new_confirm_password"
            label="Confirm New Password"
            dependencies={["new_password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              {
                min: 6,
                message: "The password must be at least 6 characters.",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("new_password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Change Password
            </Button>
          </Form.Item>
        </Form>
        <div className="icon">
          <img src={icon} alt="login icon" />
        </div>
      </Card>
    </>
  );
};
export default Profile;
