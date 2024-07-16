const a = 100;
const b = 200;
const c = a + b;
console.log("хариу: ", c);

// default exportiig importloj avch bga
const add = require("./myMath");
console.log("нэмэх үйлдлийн хариу : ", add(23, 46));

// named exportiig importloj avah
const { hasah } = require("./myMath");
console.log("хасах үйлдлийн хариу : ", hasah(87, 19));

let ranks = [1, 3, 6, 7, 9];

//array method => method
const newArr = [];
