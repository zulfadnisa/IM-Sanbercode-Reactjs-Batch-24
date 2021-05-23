import React from "react";
import style from "./Home.module.css";
import axios from "axios";
import Card from "../UI/css/Card";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      fetch: true,
    };
  }
  componentDidMount() {
    const fetchData = async () => {
      const result = await axios.get(
        `http://backendexample.sanbercloud.com/api/books`
      );
      this.setState({
        books: result.data.map((el) => {
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
        }),
        fetch: false,
      });
    };
    if (fetch) {
      fetchData();
    }
  }
  render() {
    return (
      <>
        <Card>
          <h1>Daftar Buku - Buku Pilihan</h1>
          {this.state.books.map((el) => {
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
                      {el.price},-
                    </p>
                    <p>
                      <strong>Jumlah halaman: </strong>
                      {el.totalPage}
                    </p>
                  </div>
                </div>
                <div className={style.description}>
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
      </>
    );
  }
}
export default Home;
