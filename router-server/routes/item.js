const express = require("express");

const router = express.Router();

//http://localhost:500/item/book ==>>> this is gonna be the home page of the books

router
  .route("/books")
  .get((req, res) => {
    res.send("GET /item/this Books1");
  })
  .post((req, res) => {
    res.send("POST /item/this Books");
  });

//http://localhost:500/item/book/:bookId ==>>> this is gonna be the home page of the books
router
  .route("/books/:bookId")
  .get((req, res) => {
    res.send("GET /item/this Books/:Book tittle1" + req.params.bookId);
  })
  .put((req, res) => {
    res.send("PUT /item/this Books/:Book tittle2" + req.params.bookId);
  });

module.exports = router;
