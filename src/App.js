import './App.css';
import Button from './components/Button.styled';
import Trash from './assets/trash icon.svg'
import ShoppingCart from './components/ShoppingCart.styled';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button width='44px' action={() => console.log("action")}>
          <img src={Trash} alt='trash icon' />
        </Button>
        <Button>Comprar</Button>
        <ShoppingCart notification='2' />
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
