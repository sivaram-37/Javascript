function stringLiteral(strings, prodName, prodPrice) {
  console.log(strings);
  console.log(prodName);
  console.log(prodPrice);
  let desc = "too cheap";
  if (prodPrice > 250) {
    desc = "too costly";
  }
  return `${strings[0]}${prodName}${strings[1]}${desc}${strings[2]}`;
}

let productName = "Pillow";
let productPrice = 200;

console.log(stringLiteral`The product ${productName} is ${productPrice}...!!!`);
