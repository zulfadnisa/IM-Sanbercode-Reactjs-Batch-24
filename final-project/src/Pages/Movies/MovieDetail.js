import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "antd/dist/antd.css";
import {
  Card,
  Breadcrumb,
  Image,
  Rate,
  Tag,
  Divider,
  Layout,
  Tabs,
} from "antd";
import { useHistory } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import "./Details.css";
import icon from "../../img/movie.jpg";
const { Content, Sider } = Layout;
const { TabPane } = Tabs;

const MovieDetail = (props) => {
  let { id } = useParams();
  const [details, setDetails] = React.useState([]);
  let history = useHistory();
  const handleHome = () => {
    history.push(`/`);
  };
  const handleList = () => {
    history.push(`/movies`);
  };
  React.useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const result = await axios.get(
          `https://backendexample.sanbersy.com/api/data-movie/${id}`
        );
        const {
          title,
          year,
          duration,
          genre,
          rating,
          image_url,
          description,
          review,
        } = result.data;
        setDetails({
          title,
          year,
          duration,
          genre,
          rating,
          image_url,
          description,
          review,
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
        <Breadcrumb.Item onClick={handleList}>Movie List</Breadcrumb.Item>
        <Breadcrumb.Item>{details.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-page-header">
        <Sider width={300} className="sider">
          <Image
            src={details.image_url}
            alt={details.title}
            className="site-page-image"
          />
        </Sider>
        <Content className="content">
          <Card className="site-page-header-right">
            <h2>{details.title}</h2>
            <hr />
            <Divider orientation="left" className="divider">
              Information
            </Divider>
            <p>
              <label>Year</label>
              {details.year}
            </p>
            <p>
              <label>Duration</label>
              {details.duration} minutes
            </p>
            <p>
              <label>Rating</label>
              {details.rating > 5 ? (
                <span>
                  <Rate disabled value="5" />
                  <Rate disabled value={details.rating - 5} />
                </span>
              ) : (
                <span>
                  <Rate disabled value={details.rating} />
                  <Rate disabled value="0" />
                </span>
              )}
            </p>
            <p>
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
            </p>
          </Card>
        </Content>
      </Layout>
      <Card className="tabs">
        <Tabs defaultActiveKey="1">
          <TabPane tab={<span>Description</span>} key="1">
            <div>
              <p>{details.description}</p>
              <img src={icon} alt="movie" />
            </div>
          </TabPane>
          <TabPane tab={<span>Review</span>} key="2">
            <div>
              <p>{details.review}</p>
              <img src={icon} alt="movie" />
            </div>
          </TabPane>
        </Tabs>
      </Card>
    </>
  );
};

export default MovieDetail;
