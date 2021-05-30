import React from "react";
import axios from "axios";
import "antd/dist/antd.css";
import { Card, Row, Col, Divider, Image, Empty } from "antd";
import style from "../Main/Home.module.css";
import { useHistory } from "react-router-dom";

const GenreGame = (props) => {
  const [genre, setGenre] = React.useState([]);
  let history = useHistory();
  //   const { current } = props.genre;
  React.useEffect(() => {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let genres = res.data.filter((el) =>
          el.genre.toLowerCase().includes(props.genre)
        );
        setGenre(genres);
      });
  }, [props.genre]);
  const handleAdd = (event) => {
    const id = event.target.alt;
    history.push(`/games/${parseInt(id)}`);
  };
  return (
    <Card style={{ marginBottom: 30 }}>
      <Divider orientation="left" className="divider">
        RESULT FROM {props.genre.toUpperCase()}
      </Divider>
      {genre.length === 0 && <Empty />}
      {genre.length > 0 && (
        <Row>
          {genre.map((el) => {
            return (
              <Col
                md={{ span: 6, offset: 1 }}
                className={style.col}
                key={el.id}
              >
                <Image
                  alt={el.id}
                  src={el.image_url}
                  onClick={handleAdd}
                  className={style.image}
                  preview={false}
                  hoverable="true"
                />
                <div>{el.name}</div>
              </Col>
            );
          })}
        </Row>
      )}
    </Card>
  );
};
export default GenreGame;
