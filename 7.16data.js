const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 200,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Milk",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 5400,
    casherId: 1,
    date: "2022-11-02",
  },
  {
    productName: "Cookie",
    unitPrice: 2800,
    amount: 198,
    totalPrice: 670000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 180,
    totalPrice: 1909000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate-candy",
    unitPrice: 5000,
    amount: 67,
    totalPrice: 900000,
    casherId: 1,
    date: "2022-11-02",
  },
  {
    productName: "Coca-cola",
    unitPrice: 30,
    amount: 18,
    totalPrice: 28000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Orange-Juice",
    unitPrice: 500000,
    amount: 200,
    totalPrice: 4890000,
    casherId: 1,
    date: "2022-11-02",
  },
  {
    productName: "Banana",
    unitPrice: 4890,
    amount: 9000,
    totalPrice: 3243200,
    casherId: 1,
    date: "2022-11-02",
  },
  {
    productName: "Protein-bar",
    unitPrice: 17000,
    amount: 1000,
    totalPrice: 17000000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Protein-shake",
    unitPrice: 30070,
    amount: 456,
    totalPrice: 569000,
    casherId: 1,
    date: "2022-11-02",
  },
];
console.log("Борлуулалтын мэдээ : ", data);

let findOrangeJuice = data.findIndex((i) => i.productName === "Orange-Juice");
console.log("Жүржийн шүүсний байрших дугаар : ", findOrangeJuice);
let orangeJuiceTotalPrice =
  data[data.findIndex((i) => i.productName === "Orange-Juice")].totalPrice;
console.log(
  "Жүржийн шүүсний борлуулалтын нийт үнийн дүн : ",
  orangeJuiceTotalPrice
);

const bodsonTotalPrice = data.map((product) => {
  console.log("ширхэгийн үнэ : ", product.unitPrice);
  console.log("тоо ширхэг : ", product.amount);
  return product.unitPrice * product.amount;
});
console.log("бүх бүтээгдэхүүний нийт борлуулалтын дүн : ", bodsonTotalPrice);

const niitTotalPriceIn1102 = data
  .filter((product) => product.date === "2022-11-02")
  .map((filteredData) => filteredData.totalPrice);
console.log(
  "11 сарын 2 ны өдрийн бүтээгдэхүүнүүдийн борлуулалтын дүнгүүд : ",
  niitTotalPriceIn1102
);

const sumOfTotalPriceIn1102 = data
  .filter((product) => product.date === "2022-11-02")
  .map((filteredData) => filteredData.totalPrice)
  .reduce((pV, cV) => pV + cV, 0);
console.log(
  "11 сарын 2 ны өдрийн бүтээгдэхүүнүүдийн борлуулалтын дүнгийн нийлбэр : ",
  sumOfTotalPriceIn1102
);

import chalk from "chalk";

console.log(chalk.red("Hello World"));
