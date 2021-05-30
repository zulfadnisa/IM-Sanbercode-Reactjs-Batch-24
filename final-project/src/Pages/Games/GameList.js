import React from "react";
import GameTable from "./GameTable";
import "antd/dist/antd.css";
import {
  Layout,
  Breadcrumb,
  Form,
  Select,
  Tag,
  Button,
  InputNumber,
} from "antd";
import "../Movies/DataList.css";
import { useHistory } from "react-router-dom";
import { HomeOutlined} from "@ant-design/icons";

const { Content, Sider } = Layout;

const options = [
  { value: "Action" },
  { value: "Adventure" },
  { value: "RPG" },
  { value: "Shooter" },
  { value: "Simulation" },
  { value: "Sport" },
  { value: "Strategy" },
  { value: "Puzzle" },
];

function tagRender(props) {
  const { label, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={"gold"}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 3 }}
    >
      {label}
    </Tag>
  );
}

const GameList = (props) => {
  const [form] = Form.useForm();
  const [release, setRelease] = React.useState(0);
  const [genre, setGenre] = React.useState('');
  const [filter, setFilter] = React.useState({
    release:0,
    genre:[]
  });

  const handleChangeYear = (value) => {
    setRelease(value);
  };
  const handleChangeGenre = (value) => {
    setGenre(value);
  };
  const onFinish = () => {
    setFilter({
      release:release,
      genre:genre
    })
  };
  let history = useHistory();
  const handleHome = () =>{
    history.push(`/`);
  }
  return (
    <>
      <Content>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item onClick={handleHome}><HomeOutlined/></Breadcrumb.Item>
          <Breadcrumb.Item>Game List</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          className='layout'
        >
          <Sider className="site-layout-background" width={270} theme="light">
            <Form
              layout="vertical"
              form={form}
              name="nest-messages"
              onFinish={onFinish}
            >
              <Form.Item name="release" label="Release" min="1900">
                <InputNumber onChange={handleChangeYear} />
              </Form.Item>
              <Form.Item name="genre" label="Genre">
                <Select
                  mode="multiple"
                  showArrow
                  tagRender={tagRender}
                  style={{ width: "100%" }}
                  options={options}
                  onChange={handleChangeGenre}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Sider>
          <Content className="content-layout-background">
            <GameTable filter={filter}/>
          </Content>
        </Layout>
      </Content>
    </>
  );
};

export default GameList;
