import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import { Card, Breadcrumb, Image, Tag, Divider, Layout } from "antd";
import { useHistory } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import "../Movies/Details.css";
import icon from "../../img/game.jpg";
const { Content, Sider } = Layout;

const GameDetail = (props) => {
  let { id } = useParams();
  const [details, setDetails] = React.useState([]);
  let history = useHistory();
  const handleHome = () => {
    history.push(`/`);
  };
  const handleList = () => {
    history.push(`/games`);
  };
  React.useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://backendexample.sanbersy.com/api/data-game/${id}`
        );
        const {
          name,
          release,
          genre,
          image_url,
          singlePlayer,
          multiPlayer,
          platform,
        } = result.data;
        setDetails({
          name,
          release,
          genre,
          image_url,
          singlePlayer,
          multiPlayer,
          platform,
        });
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item onClick={handleHome}>
          <HomeOutlined />
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={handleList}>Game List</Breadcrumb.Item>
        <Breadcrumb.Item>{details.name}</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-page-header">
        <Sider width={300} className="sider">
          <Image
            src={details.image_url}
            alt={details.name}
            className="site-page-image"
          />
        </Sider>
        <Content className="content">
          <Card className="site-page-header-right">
            <h2>{details.name}</h2>
            <hr />
            <Divider orientation="left" className="divider">
              Information
            </Divider>
            <p>
              <label>Release</label>
              {details.release}
            </p>
            <p>
              <label>Platform</label>
              {details.platform}
            </p>
            <p>
              <label>Players</label>
              {details.singlePlayer === 1
                ? "Single Player"
                : details.multiPlayer === 1
                ? "Multi Player"
                : "None"}
            </p>

            <Divider orientation="left" className="divider">
              Genre
            </Divider>
            <div>
              {details.genre !== null && details.genre !== undefined
                ? details.genre.split(",").map((el, index) => {
                    return (
                      <Tag color="lime" key={index}>
                        {el}
                      </Tag>
                    );
                  })
                : ""}
            </div>
            <img src={icon} alt="game icon" className="game-icon" />
          </Card>
        </Content>
      </Layout>
    </>
  );
};

export default GameDetail;
