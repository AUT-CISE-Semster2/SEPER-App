// routes/api/articles.js

const express = require('express');
const router = express.Router();
let Article = require('../models/articles.model');


//Endpoint handles Http GET requests
router.route('/').get((req, res) => {
  Article.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(400).json('Error: ' + err));
});

// endpoint handles Http POST requests for /add
router.route('/add').post((req, res) => {
  const method = req.body.method;
  const title = req.body.title;
  const authors = req.body.authors;
  const source = req.body.source;
  const pubyear = req.body.pubyear;
  const doi = req.body.doi;
  const claim = req.body.claim;
  const evidence = req.body.evidence;

  
  const newArticle = new Article({
    method,
    title,
    authors,
    source,
    pubyear,
    doi,
    claim,
    evidence,
  });

  newArticle.save()
    .then(() => res.json('Article added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
