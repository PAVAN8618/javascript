const express = require("express");
const app = express();

// Sample product data
const products = [
  { id: 1, name: "Product 1", price: 10.99 },
  { id: 2, name: "Product 2", price: 20.99 },
  { id: 3, name: "Product 3", price: 15.99 },
  { id: 4, name: "Product 4", price: 25.99 },
  { id: 5, name: "Product 5", price: 19.99 },
  { id: 6, name: "Product 6", price: 29.99 },
  { id: 7, name: "Product 7", price: 14.99 },
  { id: 8, name: "Product 8", price: 21.99 },
  { id: 9, name: "Product 9", price: 17.99 },
  { id: 10, name: "Product 10", price: 23.99 },
];

// Route to get all products
app.get("/", (req, res) => {
  res.json(products);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
