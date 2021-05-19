import React from "react";
import TabelHarga from "./TabelHarga";

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
      <TabelHarga items={dataHargaBuah} />;
    </>
  );
}
export default Tabel;
