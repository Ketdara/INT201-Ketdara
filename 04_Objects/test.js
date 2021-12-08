//object destructuring assignment +rest parameter
({ productId, productName, ...rest } = {
    productName: 'Coke',
    productId: 111,
    productPrice: 10,
    productStock: 5
  });
  console.log(productId);
  console.log(productName);
  console.log(rest);
  rest.productPrice = 200;
  console.log(rest);