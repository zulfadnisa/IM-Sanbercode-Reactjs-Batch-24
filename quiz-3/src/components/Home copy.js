import React from "react";
import style from "./Home.module.css";
import axios from "axios";
import Card from "../UI/css/Card";
import { BooksContext } from "./Books/BooksContext";

const Home = (props) => {
  const [books, setBooks, fetch, setFetch] = React.useContext(BooksContext);

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
      fetchData();
      setFetch(false);
    }
  }, [fetch]);

  return (
    <>
      <Card>
        {books.map((el, index) => {
          return (
            <div className={style.home}>
              <h2>{el.title}</h2>
              <div>
                <img src={el.image_url} alt={el.title} />
                <div>
                  <p>
                    <strong>Tahun terbit: </strong> {el.release_year}
                  </p>
                  <p>
                    <strong>Harga: </strong> Rp.
                    {el.price}
                  </p>
                  <p>
                    <strong>Jumlah halaman: </strong>
                    {el.totalPage}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <strong>Deskripsi: </strong>
                  {el.description}
                </p>
                <p>
                  <strong>Ulasan: </strong>
                  {el.review}
                </p>
              </div>
            </div>
          );
        })}
      </Card>
      <footer className={style.footer}>
        <h5>copyright &copy; 2020 by Sanbercode</h5>
      </footer>
    </>
  );
};
export default Home;
