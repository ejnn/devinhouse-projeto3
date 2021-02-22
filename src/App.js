import './App.css';
import Test from './Test';
import Trash from './utils/trash icon.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test square action={() => console.log("action")}><img src={Trash} alt='trash icon' /></Test>
        <Test>Comprar</Test>
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
      </header>
    </div>
  );
}

export default App;
