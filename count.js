const { data } = require("./hastag.json");
const orderByCount = data.sort((a, b) => b.count - a.count);
console.log(orderByCount);
const getOver100K = orderByCount.filter(x => x.count >= 100000);
// console.log(getOver100K.length);
const top20 = getOver100K.slice(0, 20);
// console.log(top20);
const top20Hastag = top20.map(x => x.hastag);
// console.log(top20Hastag);
// #code #programming #developer #coding #programmer #webdevelopment #webdeveloper #javascript #frontend #coder #developers #es6 #reactjs #softwareengineering #coders