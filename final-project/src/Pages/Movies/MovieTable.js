import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { Table, Space, Input, Card, Tag, Button } from "antd";
import "./DataList.css";
import {
  EditOutlined,
  DeleteOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";

const { Search } = Input;

const MovieTable = (props) => {
  const [movies, setMovies] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [fetch, setFetch] = React.useState(true);
  const [user] = React.useContext(UserContext);
  let token = user ? user.token : null;
  let history = useHistory();

  const { year, rating, genre } = props.filter;
  React.useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then((res) => {
          if (search.trim().length !== 0) {
            const selectMovies = res.data.filter((el) =>
              el.title.toLowerCase().includes(search.trim())
            );
            setMovies(selectMovies);
          } else if (year !== 0 || rating !== 0 || genre.length !== 0) {
            var filterMovies;
            if (year !== 0 && rating !== 0 && genre.length !== 0) {
              filterMovies = res.data.filter(
                (el) =>
                  el.year === year &&
                  el.rating === rating &&
                  genre.every((prop) =>
                    el.genre.includes(prop) ? true : false
                  )
              );
            } else if (year !== 0 && rating !== 0 && genre.length === 0) {
              filterMovies = res.data.filter(
                (el) => el.year === year && el.rating === rating
              );
            } else if (year !== 0 && rating === 0 && genre.length !== 0) {
              filterMovies = res.data.filter(
                (el) =>
                  el.year === year &&
                  genre.every((prop) =>
                    el.genre.includes(prop) ? true : false
                  )
              );
            } else if (year === 0 && rating !== 0 && genre.length !== 0) {
              filterMovies = res.data.filter(
                (el) =>
                  el.rating === rating &&
                  genre.every((prop) =>
                    el.genre.includes(prop) ? true : false
                  )
              );
            } else if (year !== 0 && rating === 0 && genre.length === 0) {
              filterMovies = res.data.filter((el) => el.year === year);
            } else if (year === 0 && rating !== 0 && genre.length === 0) {
              filterMovies = res.data.filter((el) => el.rating === rating);
            } else if (year === 0 && rating === 0 && genre.length !== 0) {
              filterMovies = res.data.filter((el) =>
                genre.every((prop) => (el.genre.includes(prop) ? true : false))
              );
            }
            setMovies(filterMovies);
          } else {
            setMovies(
              res.data.map((el) => {
                const { id, title, year, genre, rating, duration } = el;
                return { id, title, year, genre, rating, duration };
              })
            );
          }
        });
    };
    if (fetch) {
      fetchData();
      setFetch(false);
    } else if (year !== 0 || rating !== 0 || genre.length !== 0) {
      fetchData();
    }
  }, [fetch, search, year, rating, genre]);

  const onSearch = (value, event) => {
    setSearch(value.toLowerCase());
    setFetch(true);
  };
  const handleAdd = () => {
    history.push(`/create`);
  };
  const handleDetail = (event) => {
    let editedId = parseInt(event.target.value);
    history.push(`/movies/${editedId}`);
  };
  const handleEdit = (event) => {
    var editedId = parseInt(event.target.value);
    if (editedId === "NaN") {
      editedId = event.target.value;
      console.log(event);
    }
    history.push(`/create/${editedId}`);
  };
  const handleDelete = (event) => {
    var deletedId = parseInt(event.target.value);
    if (deletedId === "NaN") {
      deletedId = event.target.value;
    }
    console.log(deletedId);
    axios
      .delete(
        `https://backendexample.sanbersy.com/api/data-movie/${deletedId}`,
        { headers: { Authorization: "Bearer " + token } }
      )
      .then(() => {
        setFetch(true);
      })
      .catch((err) => {
        alert(JSON.stringify(err.response.data));
      });
  };

  const columnsMovie = [
    {
      key:'id',
      title: "ID",
      dataIndex: "id",
      sorter: {
        compare: (a, b) => a.id - b.id,
        multiple: 1,
      },
    },
    {
      key:'title',
      title: "Title",
      dataIndex: "title",
      sorter: (a, b) =>
        a !== null && b !== null ? a.title.length - b.title.length : 0,
    },
    {
      key:'year',
      title: "Year",
      dataIndex: "year",
      sorter: {
        compare: (a, b) => a.year - b.year,
        multiple: 1,
      },
    },
    {
      title: "Genre",
      key: "genre",
      dataIndex: "genre",
      render: (genre) => (
        <span>
          {genre !== null &&
            genre.split(",").map((tag, index) => {
              let color = tag.length > 5 ? "geekblue" : "green";
              return (
                <Tag color={color} key={index}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          {genre === null && <Tag color={"volcano"}>{"NULL"}</Tag>}
        </span>
      ),
    },
    {
      key:'rating',
      title: "Rating",
      dataIndex: "rating",
      sorter: {
        compare: (a, b) => a.rating - b.rating,
        multiple: 1,
      },
    },
    {
      key:'duration',
      title: "Duration",
      dataIndex: "duration",
      sorter: {
        compare: (a, b) => a.duration - b.duration,
        multiple: 1,
      },
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
      <Card className="content-layout">
        <Space direction="vertical">
          <div>
            <Search
              placeholder="search title"
              allowClear
              onSearch={onSearch}
              defaultValue=""
              className="search"
            />
            <Button onClick={handleAdd}>
              <AppstoreAddOutlined />
              Add
            </Button>
          </div>
          <Table
            columns={columnsMovie}
            dataSource={movies}
            onChange={onChange}
            className="table-striped-rows"
          />
        </Space>
      </Card>
    </>
  );
};
export default MovieTable;
