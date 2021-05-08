// import logo from './logo.svg';
import './App.css';
import FormPembelian from './Tugas-9/FormPembelian.js';
import TabelHarga from './Tugas-10/TabelHarga.js'

function App() {
  return (
    <div className="App">
      <TabelHarga/>
      <FormPembelian />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
