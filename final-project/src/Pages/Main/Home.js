import React from "react";
import axios from "axios";
import style from "./Home.module.css";
import "antd/dist/antd.css";
import { Card, Row, Col, Tabs, Image } from "antd";
import icon from "../../img/home.png";
import Genre from "../Movies/Genre";
import action from "../../img/movie/action.png";
import scifi from "../../img/movie/scifi.png";
import mystery from "../../img/movie/mystery.png";
import romance from "../../img/movie/romance.png";
import horror from "../../img/movie/horror.png";
import thriller from "../../img/movie/thriller.png";
import comedy from "../../img/movie/comedy.png";
import fantasy from "../../img/movie/fantasy.png";
import drama from "../../img/movie/drama.png";
import adventure from "../../img/movie/adventure.png";
import shooter from "../../img/movie/shooter.png";
import rpg from "../../img/movie/rpg.png";
import sport from "../../img/movie/sport.png";
import simulation from "../../img/movie/simulation.png";
import GenreGame from '../Games/GenreGame'

const { TabPane } = Tabs;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      games: [],
      isGenre: false,
      isGenreGame: false,
      genre: "",
    };
  }
  componentDidMount() {
    axios
      .get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then((res) => {
        let latestMovie = res.data.sort((a, b) =>
          a.year < b.year ? 1 : a.year > b.year ? -1 : 0
        );
        let movies = latestMovie.slice(0, 3).map((el) => {
          const { id, title, genre, image_url, year } = el;
          return { id, title, genre, image_url, year };
        });
        // let genre = latestMovie.filter((el) =>
        //   el.genre.toLowerCase().includes("adventure") ? true : false
        // );
        // console.log(latestMovie)
        // console.log(genre)
        this.setState({
          movies: movies,
        });
      });
    axios
      .get(`https://backendexample.sanbersy.com/api/data-game`)
      .then((res) => {
        let latestGame = res.data.sort((a, b) =>
          a.year < b.year ? 1 : a.year > b.year ? -1 : 0
        );
        let games = latestGame.slice(0, 3).map((el) => {
          const { id, name, genre, image_url, release } = el;
          return { id, name, genre, image_url, release };
        });
        this.setState({
          games: games,
        });
      });
  }
  handleTab = (event) => {
    let key = event.target.alt;
    this.setState({ isGenre: true, genre: key, isGenreGame:false });
  };
  handleTabGame = (event) => {
    let key = event.target.alt;
    this.setState({ isGenre: false, genre: key, isGenreGame:true });
  };
  render() {
    return (
      <div className={style.home}>
        <div className={style.header}>
          <div className={style.title}>
            <h1>Meet your next favorite game and movie</h1>
            <h4>
              The world largest community for movie and game recommendations.
            </h4>
          </div>
          <img src={icon} className={style.icon} alt="icon" />
        </div>

        <Card style={{ marginBottom: 20 }}>
          <h2>Browse your favorite genre</h2>
          <Tabs defaultActiveKey="1">
            <TabPane tab={<span>Movie</span>} key="1">
              <Row>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="action"
                    src={action}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="mystery"
                    src={mystery}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="thriller"
                    src={thriller}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="sci-fi"
                    src={scifi}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="horror"
                    src={horror}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="comedy"
                    src={comedy}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="romance"
                    src={romance}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="fantasy"
                    src={fantasy}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="drama"
                    src={drama}
                    onClick={this.handleTab}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
              </Row>
            </TabPane>
            <TabPane tab={<span>Game</span>} key="2">
              <Row>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="action"
                    src={action}
                    onClick={this.handleTabGame}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="adventure"
                    src={adventure}
                    onClick={this.handleTabGame}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="rpg"
                    src={rpg}
                    onClick={this.handleTabGame}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="shooter"
                    src={shooter}
                    onClick={this.handleTabGame}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="sport"
                    src={sport}
                    onClick={this.handleTabGame}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
                <Col md={{ span: 6, offset: 1 }} className={style.col}>
                  <Image
                    alt="simulation"
                    src={simulation}
                    onClick={this.handleTabGame}
                    className={style.image}
                    preview={false}
                    hoverable="true"
                  />
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Card>
        <div>
          {this.state.isGenre === true && <Genre genre={this.state.genre} />}
        </div>
        <div>
          {this.state.isGenreGame === true && <GenreGame genre={this.state.genre} />}
        </div>
      </div>
    );
  }
}
export default Home;
