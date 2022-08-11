'use strict';

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
