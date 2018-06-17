console.log('=====================');
console.log('Welcome to my shop!'.toUpperCase());
console.log('=====================');

var faker = require('faker');
for (var i = 0; i < 10; i++) {
  var customer = {
    name: faker.name.findName(),
    price: `$${faker.commerce.price()}`
  }
  console.log(
    customer.name + ' - ' + customer.price
  )
}