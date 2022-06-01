const express = require("express");
const chalk = require("chalk");
const items = require("./routes/item");
const product = require("./routes/product");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());

// http://localhost:5000/ingredients
const ingredients = [
  { id: "1", item: "bacon" },
  { id: "2", item: "egg" },
  { id: "3", item: "milk" },
  { id: "4", item: "butter" },
];

app.get("/ingredients", (req, res) => {
  res.json(ingredients);
});

app.use("/item", items);
app.use("/product", product);

app.get("/", (req, res) => {
  res.send("wew");
});

app.listen(port, () => {
  console.log(chalk.redBright.bold(`Listening on port ${port}`));
});
