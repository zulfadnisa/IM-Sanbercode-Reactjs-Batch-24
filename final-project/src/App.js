// import Routes from "./components/Main/Routes";
import "./App.css";
import {UserProvider} from './Context/UserContext'
import Main from './Layouts/Main'

function App() {
  return (
    <>
      <UserProvider>
        <Main />
      </UserProvider>
    </>
  );
}

export default App;
