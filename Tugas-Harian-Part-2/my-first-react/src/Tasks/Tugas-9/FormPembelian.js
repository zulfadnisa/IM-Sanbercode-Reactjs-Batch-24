import React from "react";
import "./FormPembelian.css";

class FormPembelian extends React.Component {
  render() {
    return (
      <div className="component">
        <form action="#">
          <h1>Form Pembelian Buah</h1>
          <div className="isi">
            <p>
              <b>Nama Pelanggan</b>
              <input type="text" name="nama" />
            </p>
            <p>
              <b>Daftar Item</b>
              <div className="daftar">
                <p>
                  <input type="checkbox" />
                  Semangka
                </p>
                <p>
                  <input type="checkbox" value="jeruk" />
                  Jeruk
                </p>
                <p>
                  <input type="checkbox" value="nanas" />
                  Nanas
                </p>
                <p>
                  <input type="checkbox" value="salak" />
                  Salak
                </p>
                <p>
                  <input type="checkbox" value="anggur" />
                  Anggur
                </p>
              </div>
            </p>
            <input type="submit" value="kirim" className="kirim" />
          </div>
        </form>
      </div>
    );
  }
}

export default FormPembelian;
