const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  archivedDate: {
    type: Date,
  },
  archived: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("News", NewsSchema);
