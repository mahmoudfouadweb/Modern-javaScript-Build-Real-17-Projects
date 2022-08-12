'use strict';
// const text = `mahmoud fouad  waffle iron 80  2
// mahmoud fouad  blenfer 200 1
// mahmoud fouad  knife 10  4
// nikita smith  waffle iron 80  1
// nikita smith  blenfer 10 2
// nikita smith  knife 20  3`;

// text
//   .split('\n')
//   .map(line => line.split('\t'))
//   .reduce((customers, line) => {
//     console.log(customers, line);
//     customers[line[0]] = [];
//     customers[line[0]].push({
//       name: [line[0]],
//     });
//     return customers;
//   }, {});
console.log(text);
let orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 300 },
  { amount: 20 },
  { amount: 250 },
  { amount: 2 },
];

const final = orders.reduce((s, o) => s + o.amount, 0);
console.log(final);

let final2 = 0;
for (let i = 0; i < orders.length; i++) final2 += orders[i].amount;
console.log(final2);
