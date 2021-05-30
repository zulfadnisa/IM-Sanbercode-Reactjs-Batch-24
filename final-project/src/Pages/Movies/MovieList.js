import React from "react";
import MovieTable from "./MovieTable";
import { useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import {
  Layout,
  Breadcrumb,
  Form,
  Select,
  Tag,
  Button,
  InputNumber,
  Slider,
} from "antd";
import { FrownOutlined, SmileOutlined, HomeOutlined } from "@ant-design/icons";

import "./DataList.css";

const { Content, Sider } = Layout;

const options = [
  { value: "Action" },
  { value: "Adventure" },
  { value: "Drama" },
  { value: "Family" },
  { value: "Thriller" },
  { value: "Death Game" },
  { value: "Horror" },
  { value: "Sci-Fi" },
  { value: "Anime" },
  { value: "Romance" },
  { value: "Mystery" },
  { value: "Comedy" },
  { value: "Fantasy" },
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

const MovieList = (props) => {
  const [form] = Form.useForm();
  const [rating, setRating] = React.useState(0);
  const [year, setYear] = React.useState(0);
  const [genre, setGenre] = React.useState("");
  const [filter, setFilter] = React.useState({
    year: 0,
    rating: 0,
    genre: [],
  });

  const handleChange = (value) => {
    setRating(value);
  };
  const handleChangeYear = (value) => {
    setYear(value);
  };
  const handleChangeGenre = (value) => {
    setGenre(value);
  };
  const onFinish = () => {
    setFilter({
      year: year,
      rating: rating,
      genre: genre,
    });
  };
  let history = useHistory();
  const handleHome = () => {
    history.push(`/`);
  };
  return (
    <>
      <Content>
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item onClick={handleHome}>
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item>Movie List</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="layout">
          <Sider className="site-layout-background" width={270} theme="light">
            <h2>Filter</h2>
            <hr />
            <Form
              layout="vertical"
              form={form}
              name="nest-messages"
              onFinish={onFinish}
            >
              <Form.Item label="Year" min="1900">
                <InputNumber onChange={handleChangeYear} />
              </Form.Item>
              <Form.Item label="Genre">
                <Select
                  mode="multiple"
                  showArrow
                  tagRender={tagRender}
                  style={{ width: "100%" }}
                  options={options}
                  onChange={handleChangeGenre}
                />
              </Form.Item>
              <Form.Item label="Rating" defaultValue="0">
                <FrownOutlined style={{ marginRight: 190 }} />
                <SmileOutlined />
                <Slider onChange={handleChange} value={rating} max="10" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Filter
                </Button>
              </Form.Item>
            </Form>
          </Sider>
          <Content className="content-layout-background">
            <MovieTable filter={filter} />
          </Content>
        </Layout>
      </Content>
    </>
  );
};

export default MovieList;
