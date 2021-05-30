import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { Table, Space, Input, Card, Tag, Button } from "antd";
import "../Movies/DataList.css";
import {
  EditOutlined,
  DeleteOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
const { Search } = Input;

const GameTable = (props) => {
  const [games, setGames] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [fetch, setFetch] = React.useState(true);
  const [user] = React.useContext(UserContext);
  let token = user ? user.token : null;
  let history = useHistory();

  const { release, genre } = props.filter;
  React.useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-game`)
        .then((res) => {
          if (search.trim().length !== 0) {
            const selectGames = res.data.filter((el) =>
              el.name.toLowerCase().includes(search.trim())
            );
            setGames(selectGames);
          } else if (release !== 0 || genre.length !== 0) {
            var filterGames;
            if (release !== 0 && genre.length !== 0) {
              filterGames = res.data.filter(
                (el) =>
                  el.release === String(release) &&
                  genre.every((prop) =>
                    el.genre.includes(prop) ? true : false
                  )
              );
            } else if (release !== 0 && genre.length === 0) {
              filterGames = res.data.filter(
                (el) => el.release === String(release)
              );
            } else if (release === 0 && genre.length !== 0) {
              filterGames = res.data.filter((el) =>
                genre.every((prop) => (el.genre.includes(prop) ? true : false))
              );
            }
            setGames(filterGames);
          } else {
            setGames(
              res.data.map((el) => {
                const { id, name, release, genre, platform } = el;
                return { id, name, release, genre, platform };
              })
            );
          }
        });
    };
    if (fetch) {
      fetchData();
      setFetch(false);
    } else if (release !== 0 || genre.length !== 0) {
      fetchData();
    }
  }, [fetch, release, genre]);

  const onSearch = (value) => {
    setSearch(value.toLowerCase());
    setFetch(true);
  };
  const handleAdd = (event) => {
    history.push(`/movies`);
  };
  const handleDetail = (event) => {
    let editedId = parseInt(event.target.value);
    history.push(`/games/${editedId}`);
  };
  const handleEdit = (event) => {
    var editedId = parseInt(event.target.value);
    if (editedId==='NaN'){
      editedId = (event.target.value);
    }
    history.push(`/create/${editedId}`);
  };
  const handleDelete = (event) => {
    var deletedId = parseInt(event.target.value);
    if (deletedId==='NaN'){
      deletedId = (event.target.value)
    }
    console.log(typeof(deletedId))
    axios
      .delete(
        `https://backendexample.sanbersy.com/api/data-game/${deletedId}`,
        { headers: { Authorization: "Bearer " + token } }
      )
      .then(() => {
        setFetch(true);
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  };

  const columnsGame = [
    {
      title: "ID",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: "Release",
      dataIndex: "release",
      sorter: {
        compare: (a, b) => a.release - b.release,
        multiple: 1,
      },
    },
    {
      title: "Genre",
      key: "tags",
      dataIndex: "genre",
      render: (genre) => (
        <span>
          {genre !== null &&
            genre.split(",").map((tag, index) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          {genre === null && (
            <Tag color={"volcano"}>{'NULL'}</Tag>
          )}
        </span>
      ),
    },

    {
      title: "Platform",
      dataIndex: "platform",
    },
    {
      title: "Action",
      key: "action",
      dataIndex: "id",
      render: (text, record) => (
        <Space size="middle">
          <button onClick={handleDetail} value={text}>
            Detail
          </button>
          <button onClick={handleEdit} value={text}>
            <EditOutlined />
          </button>
          <button onClick={handleDelete} value={text}>
            <DeleteOutlined />
          </button>
        </Space>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("props", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Card className="content-layout-game">
        <Space direction="vertical">
          <div>
            <Search
              placeholder="search name"
              allowClear
              onSearch={onSearch}
              defaultValue=""
              className="search-game"
            />
            <Button onClick={handleAdd} className='add'>
              <AppstoreAddOutlined />
              Add
            </Button>
          </div>
          <Table
            columns={columnsGame}
            dataSource={games}
            onChange={onChange}
            className="table-striped-rows"
          />
        </Space>
      </Card>
    </>
  );
};
export default GameTable;
