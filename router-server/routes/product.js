const express = require("express");
const {
  getToys,
  postToys,
  getToy,
  createToys,
  deleteToys,
} = require("./controllers/productsController");

const productRouter = express.Router();

productRouter.route("/toys").get(getToys).post(postToys);
productRouter
  .route("/toys/:toyId")
  .get(getToy)
  .put(createToys)
  .delete(deleteToys);

module.exports = productRouter;
