#Header
- [ ] deve estar presente em ​ TODAS AS PÁGINAS​ .
- [ ] Deve conter: logo, barra de busca, e botão do carrinho, informando quantos itens (SKU's) foram selecionados.
- [ ] O usuário poderá digitar uma busca e clicar na lupa para pesquisar. Será direcionado a página de ​ Resultados de busca​ .
- [ ] Caso o carrinho esteja vazio, o badge vermelho com quantidade não deve ser exibido
- [ ] Ao clicar no logo, deve ser direcionado a página INICIAL de listagem
- [ ] De acordo com as guidelines de estilo

#Card de Produto
- [ ] O ​ Título​ do card e a ​ imagem​ devem ser CLICÁVEIS, direcionando para a página de detalhes​ .
- [ ] Exibir foto, título do produto, preço e botão de comprar.
- [x] O preço deve estar formatado em R$ 9999,00
- [ ] Seguir as regras de design (espaçamento, cores, etc)
- [x] O preço mostrado no card é unitário, e NÃO baseado na QUANTIDADE.
- [ ] ** Alem das informações anteriores, também é exibida a descrição do produto
- [ ] ** Também é possível adicionar / remover o produto do carrinho pela página de detalhes.
- [ ] De acordo com as guidelines de estilo

# Listagem de Produto
- [ ] Listar todos os produtos em um grid de 4 colunas, caso haja menos de 4 cards na linha, eles devem ser alinhados da esquerda pra direita.
- [ ] Seguir o layout de acordo com o Figma.
- [ ] Ao adicionar um produto/remover, ele deve alterar o ​ badge de contagem​ do botão de carrinho.
- [ ] Os itens serão listados a partir da função (fakeAPI) ​ fetchProducts()<Promise>
- [ ] De acordo com as guidelines de estilo

# Busca de Produtos
- [ ] Ao realizar uma busca ​ A PARTIR DE QUALQUER PÁGINA ​ deve ser direcionado para uma tela contendo os resultados da busca. (PODE ser a MESMA página de LISTAGEM, com alterações. OU criar página nova)
- [ ] Os critérios de aceite da página de​ LISTAGEM DE PRODUTOS (1, 2 e 3) ​ se
aplicam a esta.
- [ ] O título da página deve ser alterado para ​ `Resultados para "​${search}"`
- [ ] De acordo com as guidelines de estilo

# Detalhes de Produtos
- [ ] Seguir o layout especificado no figma
- [ ] Deve ser possível adicionar e remover um produto do carrinho
- [ ] Exibir um botão de voltar para a página interior Carrinho
- [ ] De acordo com as guidelines de estilo

# Carrinho
- [ ] Seguir especificações visuais do Figma
- [ ] Os preços devem ser formatados em R$ 9999,00
- [ ] Listar os produtos e suas quantidades, informando preço unitário e subtotal por item.
- [ ] Ao decrementar um item com quantidade 1, ele deve sumir do carrinho.
- [ ] Exibir abaixo da listagem, o TOTAL da compra, e um botão de finalizar compra.
- [ ] Sempre que alterada quantidade ou produtos dentro do carrinho, o total deve ser atualizado imediatamente
- [ ] Ao finalizar a compra, exibir um alert informando "A compra foi processada comsucesso, Obrigado!" e o carrinho RESETADO ao estado inicial. (sem produtos)
- [ ] De acordo com a guideline de estilo
