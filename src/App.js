import { useSelector } from "react-redux";
import { themeSelector } from "redux/slices/theme.js";
import { ThemeProvider } from "styled-components";
import Header from 'components/Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BotaoVoltar from "components/BotaoVoltar";


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
            <BotaoVoltar />
          </Route>

        </Switch>

      </Router>

    </ThemeProvider>
  );
}

export default App;
