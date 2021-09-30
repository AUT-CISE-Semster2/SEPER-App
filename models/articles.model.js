// models/article.model.js
const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  method: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  authors: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  pubyear: {
    type: String
  },
  doi: {
    type: String
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  },
});

module.exports = Articles = mongoose.model('Articles', ArticleSchema);