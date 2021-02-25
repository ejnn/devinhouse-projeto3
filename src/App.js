import { useSelector } from "react-redux";
import { themeSelector } from "redux/slices/theme.js";
import { ThemeProvider } from "styled-components";
import Header from 'components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import DetailedProductCard from 'components/DetailedProductCard';
import ProductCard from 'components/ProductCard';

const teste = {
  id: 478398,
  name:
    'Metra - Radio Installation Dash Kit for Select Ford, Mazda and Mercury Vehicles (Pair) - Black',
  price: 16.99,
  description:
    'From our expanded online assortment; compatible with select Ford, Mazda and Mercury vehicles; allows the installation of an aftermarket radio into the factory dash location; high-grade ABS plastic material',
  url:
    'http://www.bestbuy.com/site/metra-radio-installation-dash-kit-for-select-ford-mazda-and-mercury-vehicles-pair-black/478398.p?id=1185268614282&skuId=478398&cmp=RMXCC',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/4783/478398_rc.jpg',
};

function App() {
  const theme = useSelector(themeSelector());
  return (
    <ThemeProvider theme={theme}>

      <Router>
        <Header />
        {/* <header> ~ Header ~ </header> */}

        <Switch>

          <Route path="/busca/:query">
            <div> ~ Busca de produtos ~ </div>
          </Route>

          <Route path="/detalhes">
            <div> ~ Detalhes ~ </div>
          </Route>

          <Route path="/carrinho">
            <div> ~ Carrinho ~ </div>
          </Route>

          <Route path="/">
            <div> ~ Listagem de produtos ~ </div>
            <DetailedProductCard itemData={teste}/>
            <ProductCard itemData={teste}/>
          </Route>

        </Switch>

      </Router>

    </ThemeProvider>
  );
}

export default App;
