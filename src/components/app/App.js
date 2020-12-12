import './App.css';
import Film from '../film/Film';
import NavBar from "../navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Film name="Inglorious Basterds"/>
    </div>
  );
}

export default App;
