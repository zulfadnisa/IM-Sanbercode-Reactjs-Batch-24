import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Form from "../UI/Form";
import styles from "../UI/FormPembelian.module.css";
import Header from "../UI/Header";

class FormPembelian extends React.Component {
  render() {
    return (
      <>
        <Header title="Form Pembelian Buah" />
        <Card className={styles["checkbox"]}>
          <Form>
            <div>
              <label>Nama Pelanggan</label>
              <input type="text" name="nama" />
            </div>
            <div>
              <label>Daftar Item</label>
              <p>
                <input type="checkbox" />
                <label>Semangka</label>
              </p>

              <p>
                <input type="checkbox" value="jeruk" />
                <label>Jeruk</label>
              </p>
              <p>
                <input type="checkbox" value="nanas" />
                <label>Nanas</label>
              </p>
              <p>
                <input type="checkbox" value="salak" />
                <label>Salak</label>
              </p>
              <p>
                <input type="checkbox" value="anggur" />
                <label>Anggur</label>
              </p>
            </div>
            <Button>kirim</Button>
          </Form>
        </Card>
      </>
    );
  }
}

export default FormPembelian;
