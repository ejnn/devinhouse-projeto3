import {EmptyResultMessage} from "./PageResult.styled";
import ProductsGrid from "components/ProductsGrid";

export default function PageResult({ filteredProducts }) {
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
