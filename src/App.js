import { useSelector } from "react-redux";
import { themeSelector } from "redux/slices/theme.js";
import { ThemeProvider } from "styled-components";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from 'components/Header';
import HomePage from "pages/HomePage";
import SearchResultsPage from "pages/SearchResultsPage";
import ProductDetailsPage from "pages/ProductDetailsPage";
import ShoppingCartPage from "pages/ShoppingCartPage";
import GlobalStyle from 'style/globalStyles';

function App() {

  const theme = useSelector(themeSelector());

  return (
    <ThemeProvider theme={theme}>
      <Router>

        <GlobalStyle />
        <Header />

        <Switch>

          <Route path="/busca/:query" render={({ match }) =>
            <SearchResultsPage query={match.params.query} />} />

          <Route path="/detalhes/:id" render={({ match }) =>
            <ProductDetailsPage productId={match.params.id} />} />

          <Route path="/carrinho">
            <ShoppingCartPage />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>

        </Switch>

      </Router>
    </ThemeProvider>
  );
}

export default App;
