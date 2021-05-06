// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
      <div class="formulir">
        <form action="#">
          <h1>
            Form Pembelian Buah
        </h1>
          <div class="isi">
            <p>
              <b>Nama Pelanggan</b>
              <input type="text" name="nama" />
            </p>
            <p>
              <b>Daftar Item</b>
              <div class="daftar">
                <p><input type="checkbox" />Semangka</p>
                <p><input type="checkbox" value="jeruk" />Jeruk</p>
                <p><input type="checkbox" value="nanas" />Nanas</p>
                <p><input type="checkbox" value="salak" />Salak</p>
                <p><input type="checkbox" value="anggur" />Anggur</p>
              </div>
            </p>
            <input type="submit" value="kirim" class="kirim" />
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
