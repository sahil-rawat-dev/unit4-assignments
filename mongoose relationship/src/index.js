const express= require("express");
const mongoose= require("mongoose");
const app =express();
app.use(express.json());

const usersController = require("./controllers/user.controllers");
const sectionController= require("./controllers/section.controllers");
const bookController = require("./controllers/book.controllers");
const authorController =require("./controllers/author.controllers");
const authorBookController =require("./controllers/authorBook.controller");
const checkoutController =require("./controllers/checkout.controllers")



app.use("/users", usersController); 
app.use("/sections",sectionController);
app.use("/books",bookController);
app.use("/authors",authorController);
app.use("/authorBooks",authorBookController);
app.use("/checkouts",checkoutController)

  module.exports = app;