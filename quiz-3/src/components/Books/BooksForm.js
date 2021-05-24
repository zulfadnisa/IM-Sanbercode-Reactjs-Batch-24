import React from "react";
import axios from "axios";
import Card from "../../UI/css/Card";
import Button from "../../UI/css/Button";
import { BooksContext } from "./BooksContext";
import style from "./BooksForm.module.css";
import { useHistory } from "react-router-dom";

const BooksForm = (props) => {
  const history = useHistory();
  const [books, setBooks, fetch, setFetch, currentId, setCurrentId] =
    React.useContext(BooksContext);
  const [input, setInput] = React.useState({
    title: "",
    description: "",
    review: "",
    release_year: 2020,
    totalPage: 0,
    price: 0,
    image_url: "",
  });

  React.useEffect(() => {
    const fetchData = async () => {
      if (currentId !== null) {
        const result = await axios.get(
          `http://backendexample.sanbercloud.com/api/books/${currentId}`
        );
        const {
          title,
          description,
          review,
          release_year,
          totalPage,
          price,
          image_url,
        } = result.data;
        setInput({
          title,
          description,
          review,
          release_year,
          totalPage,
          price,
          image_url,
        });
      }
    };
    fetchData();
  }, [currentId]);

  const submitHandler = (event) => {
    event.preventDefault();
    const newBooks = {
      title: input.title,
      description: input.description,
      review: input.review,
      release_year: +input.release_year,
      totalPage: +input.totalPage,
      price: +input.price,
      image_url: input.image_url,
    };

    if (currentId === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/books`, newBooks)
        .then((res) => {
          const data = res.data;
          setBooks([...books, { ...newBooks, id: data.id }]);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/books/${currentId}`,
          newBooks
        )
        .then(() => {
          setFetch(true);
          setCurrentId(null);
        });
    }

    setInput({
      title: "",
      description: "",
      review: "",
      release_year: 2020,
      totalPage: 0,
      price: 0,
      image_url: "",
    });
    history.push("/");
  };
  const handleChange = (event) => {
    let value = event.target.value;
    let typeOfInput = event.target.name;
    setInput({
      ...input,
      [typeOfInput]: value,
    });
  };
  return (
    <Card>
      <h2>Books Form</h2>
      <form onSubmit={submitHandler} className={style.form}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={input.title}
            required
          />
        </div>
        <div>
          <label>Description: </label>
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            value={input.description}
            required
            className={style.textarea}
          ></textarea>
        </div>
        <div>
          <label>Review: </label>
          <textarea
            type="text"
            name="review"
            onChange={handleChange}
            value={input.review}
            required
            className={style.textarea}
          ></textarea>
        </div>
        <div>
          <label>Release Year: </label>
          <input
            type="number"
            min="1980"
            name="release_year"
            onChange={handleChange}
            value={input.release_year}
            required
          />
        </div>
        <div>
          <label>Total Page: </label>
          <input
            type="number"
            name="totalPage"
            onChange={handleChange}
            value={input.totalPage}
            required
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="number"
            name="price"
            onChange={handleChange}
            value={input.price}
            required
          />
        </div>
        <div>
          <label>Image URL: </label>
          <input
            type="text"
            name="image_url"
            onChange={handleChange}
            value={input.image_url}
            required
          />
        </div>
        <Button type="submit">SUBMIT</Button>
      </form>
    </Card>
  );
};
export default BooksForm;
