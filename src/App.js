import { useSelector } from "react-redux";
import { themeSelector } from "redux/slices/theme.js";
import { ThemeProvider } from "styled-components";
import Header from 'components/Header';
import BuyButton from 'components/BuyButton';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {

  const props = {
    id: 43900,
    name: 'Duracell - AAA Batteries (4-Pack)',
    price: 5.49,
  }

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
            <BuyButton props={props}></BuyButton>
          </Route>

        </Switch>

      </Router>

    </ThemeProvider>
  );
}

export default App;
