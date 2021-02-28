import {EmptyResultMessage} from "./SearchPageResult.styled";
import ProductsGrid from "components/ProductsGrid";

export default function SearchPageResult({ filteredProducts }) {
  if (filteredProducts.length != 0) {
    return <ProductsGrid itemData={filteredProducts} />;
  } else {
    return (
      <EmptyResultMessage>
        Nenhum resultado encontrado para esta busca.
      </EmptyResultMessage>
    );
  }
}
