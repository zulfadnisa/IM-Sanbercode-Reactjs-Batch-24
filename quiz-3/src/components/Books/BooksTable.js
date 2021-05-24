import React from "react";
import Card from "../../UI/css/Card";
import Button from "../../UI/css/Button";
import axios from "axios";
import { BooksContext } from "./BooksContext";
import style from "./BooksTable.module.css";

const BooksTable = () => {
  const [books, setBooks, fetch, setFetch, currentId, setCurrentId] =
    React.useContext(BooksContext);
  const [search, setSearch] = React.useState("");
  const [isSearch, setIsSearch] = React.useState(false);
  const [correct, setCorrect] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://backendexample.sanbercloud.com/api/books`
      );

      setBooks(
        result.data.map((el) => {
          const {
            id,
            title,
            description,
            review,
            release_year,
            totalPage,
            price,
            image_url,
          } = el;
          return {
            id,
            title,
            description,
            review,
            release_year,
            totalPage,
            price,
            image_url,
          };
        })
      );
    };
    if (fetch) {
      if (isSearch === true) {
        const searchnow = search.toLowerCase()
        let result = books.filter((el) => el.title.toLowerCase().includes(searchnow));
        if (result.length > 0) {
          setBooks(result);
        } else {
          setCorrect(false);
        }
        setSearch("");
      } else {
        fetchData();
        setCorrect(true);
      }
      setFetch(false);
    }
  }, [fetch, isSearch]);
  const addEditHandler = (event) => {
    let editedId = parseInt(event.target.value);
    setCurrentId(editedId);
  };

  const addDeleteHandler = (event) => {
    let deletedId = parseInt(event.target.value);
    axios
      .delete(`http://backendexample.sanbercloud.com/api/books/${deletedId}`)
      .then(() => {
        let conditionalCurrentId =
          currentId === deletedId ? { currentId: null } : {};
        setCurrentId({ ...conditionalCurrentId });
        setFetch(true);
      });
  };

  const handleChange = (event) => {
    setCorrect(true);
    setFetch(true);
    setIsSearch(false);
    let value = event.target.value;
    setSearch(value);
  };
  const searchHandler = (event) => {
    event.preventDefault();
    if (search.trim().length > 0) {
      setIsSearch(true);
      setFetch(true);
    }
  };
  return (
    <>
      <Card className={style.search}>
        <input type="text" onChange={handleChange} value={search} />
        <Button onClick={searchHandler}>Search</Button>
      </Card>
      <Card className={style.table}>
        <h1>Daftar Buku</h1>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th>Review</th>
              <th>Release Year</th>
              <th>Total Page</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {correct === true &&
              books.map((book, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{book.title}</td>
                    <td>{book.description}</td>
                    <td>{book.review}</td>
                    <td>{book.release_year}</td>
                    <td>{book.totalPage}</td>
                    <td>{book.price}</td>
                    <td>
                      <div>
                        <Button onClick={addEditHandler} value={book.id}>
                          Edit
                        </Button>
                      </div>
                      <div>
                        <Button value={book.id} onClick={addDeleteHandler}>
                          Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {correct === false && <p>Not found</p>}
      </Card>
      {/* <BookForm /> */}
    </>
  );
};
export default BooksTable;
