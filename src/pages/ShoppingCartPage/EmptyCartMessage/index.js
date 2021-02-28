import {
  SEmptyCartWrapper,
  EmptyCartMessage
} from "./EmptyCartMessage.styled";

export default function EmptyCartWrapper() {
  return (
    <>
      <SEmptyCartWrapper />

      <EmptyCartMessage>
        Seu carrinho está vazio.
            </EmptyCartMessage>
    </>
  );
};
