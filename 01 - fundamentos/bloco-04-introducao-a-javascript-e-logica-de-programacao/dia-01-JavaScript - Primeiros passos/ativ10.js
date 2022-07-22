const costOfProdutc = 2;
const saleValue = 4;

if (costOfProdutc > 0 && saleValue > 0) {
  const totalCostOfProduct = costOfProdutc * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log('Erro');
}