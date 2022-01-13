const express = require("express");
const News = require("../models/news");
const route = express.Router();
const newsCrud = require("../middleware/newsCrud");
const { check, checkSchema } = require("express-validator");

// /news
route.get("/", newsCrud.getNews);
route.post(
  "/",
  [
    check("title", "Title is required").not().isEmpty(),
    check("description", "Description is required").not().isEmpty(),
    //   check("content", "Content is required").not().isEmpty(),
    //   check("author", "Author is required").not().isEmpty(),
  ],
  newsCrud.postNews
);
route.put(
  "/:id",
  checkSchema({
    id: {
      in: ["params", "query"],
      errorMessage: "ID is wrong",
      isMongoId: true,
    },
  }),
  newsCrud.putNews
);

route.delete(
  "/:id",
  checkSchema({
    id: {
      in: ["params", "query"],
      errorMessage: "ID is wrong",
      isMongoId: true,
    },
  }),
  newsCrud.deleteNews
);

module.exports = route;
