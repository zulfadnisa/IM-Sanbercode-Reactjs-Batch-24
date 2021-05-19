import React from "react";
import "./App.css";
import Fruits from "./components/Tugas-12/Fruits/Fruits";
import NewFruits from "./components/Tugas-12/NewFruits/NewFruits";
// import FormPembelian from "./components/Tugas-9/FormPembelian";
// import TabelHarga from "./components/Tugas-10/TabelHarga";
// import ClockTimer from "./components/Tugas-11/ClockTimer";

// const dataHargaBuah = [
//   { nama: "Semangka", harga: 10000, berat: 1000 },
//   { nama: "Anggur", harga: 40000, berat: 500 },
//   { nama: "Strawberry", harga: 30000, berat: 400 },
//   { nama: "Jeruk", harga: 30000, berat: 1000 },
//   { nama: "Mangga", harga: 30000, berat: 500 },
// ];
var daftarBuah = [
  { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
  { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
  { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
  { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
  { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
];

function App() {
  const [fruits, setFruits] = React.useState(daftarBuah);

  const addFruitsHandler = (fruit) => {
    setFruits((prevFruits) => {
      return [...prevFruits, fruit];
    });
  };
  return (
    <div className="App">
      <Fruits items={fruits} />
      <NewFruits addNewFruits={addFruitsHandler} />
      {/* <TabelHarga items={dataHargaBuah} />
      <FormPembelian />
      <ClockTimer start={100} /> */}
    </div>
  );
}

export default App;
