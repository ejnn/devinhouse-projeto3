+ HomePage
  + Header
    + ShopeeLogo
    + SearchBar
      + TextField
      + SearchButton
    + ShoppingCartButton
  + Title ("Bem-vindo!")
  + ProductsGrid
    + ProductCard
      + CardContentWrapper
        + ProductImage
        + ProductDescription
        + PriceWrapper
        	+ Price (unitário)
        	+ Installment (parcela)
        + ItemPurchaseButton


+ SearchResultsPage
  + Header
  + Title ("Resultados para $busca")
  + ProductsGrid

+ ProductDetailsPage
  + Header
  + Title ("$nomeProduto")
  + GoBackButton
  + DetailedProductCard
    + DetailedCardContentWrapper
      + ProductImage
      + SecondHalfWrapper
        + ProductDescription
        + PriceWrapper
        + ItemPurchaseButton


+ ShoppingCartPage
  + Header
  + Title ("Carrinho")
  + ProductTableWrapper
    + TableHeader
    + ProductTable
      + ProductRow
        + ProductTitle
        + Price (unitário)
        + ItemPurchaseButton
        + Price (subtotal)
  + CheckoutControlsWrapper
    + Price (total)
    + Button (Finalizar compra)


## Responsabilidades
+ Header - Gustavo e Bruno
+ Title - Bruno
+ ProductsGrid - Gui e David
+ GoBackButton - Murilo
+ DetailedProductCard - Gui e David
+ ProductTableWrapper - Murilo e Gustavo
+ CheckoutControlsWrapper - Murilo e Gustavo
+ Router - Eduardo
+ Redux - Eduardo
