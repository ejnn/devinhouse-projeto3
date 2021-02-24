import './App.css';
import Button from './components/Button.styled';
import Trash from './assets/trash icon.svg'
import ShoppingCart from './components/ShoppingCart/ShoppingCart.styled';

/* meu import */
import Card from "./components/ProductCard";

const items = {
  id: 43900,
  name: 'Duracell - AAA Batteries (4-Pack)',
  price: 5.49,
  description:
    'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
  url:
    'http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button width='44px' action={() => console.log("action")}>
          <img src={Trash} alt='trash icon' />
        </Button>
        <Button>Comprar</Button>
        <ShoppingCart notification='9' />
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
      {/*APENAS PARA TESTE - DELETAR PARA O CASO DE CONFLITO */}
      <Card data={items}/>
    </div>
  );
}

export default App;
