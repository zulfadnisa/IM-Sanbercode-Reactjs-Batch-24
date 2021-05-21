import React from "react";
import TabelHarga from "./TabelHarga";
import Header from "../UI/Header";

function Tabel() {
  const dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];
  return (
    <>
      <Header title="Tabel Harga Buah" />
      <TabelHarga items={dataHargaBuah} />;
    </>
  );
}
export default Tabel;
