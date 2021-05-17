// import logo from './logo.svg';
import "./App.css";
import FormPembelian from "./components/Tugas-9/FormPembelian";
import TabelHarga from "./components/Tugas-10/TabelHarga";
import ClockTimer from "./components/Tugas-11/ClockTimer";

function App() {
  const dataHargaBuah = [
    { nama: "Semangka", harga: 10000, berat: 1000 },
    { nama: "Anggur", harga: 40000, berat: 500 },
    { nama: "Strawberry", harga: 30000, berat: 400 },
    { nama: "Jeruk", harga: 30000, berat: 1000 },
    { nama: "Mangga", harga: 30000, berat: 500 },
  ];
  return (
    <div className="App">
      <TabelHarga items={dataHargaBuah} />
      <FormPembelian />
      <ClockTimer start={100} />
    </div>
  );
}

export default App;
