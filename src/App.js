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
  id: 43900,
  name: 'Duracell - AAA Batteries (4-Pack)',
  price: 5.49,
  description:
    'Compatible with select electronic devices; AAA size; DURALOCK Power Preserve technology; 4-pack',
  url:
    'http://www.bestbuy.com/site/duracell-aaa-batteries-4-pack/43900.p?id=1051384074145&skuId=43900&cmp=RMXCC',
  image: 'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
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
          </Route>

        </Switch>

      </Router>

    </ThemeProvider>
  );
}

export default App;
