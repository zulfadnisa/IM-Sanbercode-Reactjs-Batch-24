import React from "react";
import CreateMovie from "./CreateMovie";
import CreateGame from "./CreateGame";
import "antd/dist/antd.css";
import { Tabs,Breadcrumb } from "antd";
import "./Create.css";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { HomeOutlined} from "@ant-design/icons";
const { TabPane } = Tabs;

const Create = (props) => {
  const [activeKey, setActiveKey] = React.useState("1");
  let { id } = useParams();
  React.useEffect(() => {
    const fetchData = async () => {
      if (id) {
        var tab = ''
        axios
          .get(`https://backendexample.sanbersy.com/api/data-movie`)
          .then((res) => {
            res.data.find((el) => {
              if (el.id === parseInt(id)) {
                tab = '1'
                setActiveKey(tab)
              }
              return tab;
            });
          });
        axios
          .get(`https://backendexample.sanbersy.com/api/data-game`)
          .then((res) => {
            res.data.find((el) => {
              if (el.id === parseInt(id)) {
                tab = '2'
                setActiveKey(tab)
              }
              return tab
            });
          });
      }
    };
    fetchData();
  }, [id]);

  const keyChange = (value) => {
    setActiveKey(value);
  };
  let history = useHistory();
  const handleHome = () =>{
    history.push(`/`);
  }
  return (
    <div className="card-container">
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item onClick={handleHome}>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item>Create</Breadcrumb.Item>
      </Breadcrumb>
      <Tabs
        type="card"
        activeKey={activeKey}
        onChange={keyChange}
        className="show"
      >
        <TabPane tab="Movie" key="1">
          <CreateMovie />
        </TabPane>
        <TabPane tab="Game" key="2">
          <CreateGame />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default Create;
