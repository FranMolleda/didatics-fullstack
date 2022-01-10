const express = require("express")
const News = require("../models/news")
const route = express.Router()
const newsCrud = require("../middleware/newsCrud")

// /news
route.get("/", newsCrud.getNews)
route.post("/", newsCrud.postNews)
route.put("/:id", newsCrud.putNews)
route.delete("/:id", newsCrud.deleteNews)

module.exports = route