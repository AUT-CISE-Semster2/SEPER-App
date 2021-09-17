// routes/api/articles.js

const express = require('express');
const router = express.Router();

// Load article model
const Articles = require('../models/articles.model');

// @route GET api/articles/test
// @description tests articles route
// @access Public
router.get('/test', (req, res) => res.send('article route testing!'));

// @route GET api/articles
// @description Get all articles
// @access Public
router.get('/get', (req, res) => {
    Articles.find()
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Article found' }));
});

// @route GET api/articles/:id
// @description Get single book by id
// @access Public
router.get('/:id', (req, res) => {
  Articles.findById(req.params.id)
    .then(articles => res.json(articles))
    .catch(err => res.status(404).json({ noarticlesfound: 'No Article found' }));
});

// @route GET api/books
// @description add/save book
// @access Public
router.post('/add', (req, res) => {
  Articles.create(req.body)
    .then(articles => res.json({ msg: 'Article added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this Article' }));
});

// @route GET api/books/:id
// @description Update book
// @access Public
router.put('/:id', (req, res) => {
  Articles.findByIdAndUpdate(req.params.id, req.body)
    .then(articles => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete book by id
// @access Public
router.delete('/:id', (req, res) => {
  Articles.findByIdAndRemove(req.params.id, req.body)
    .then(articles => res.json({ mgs: 'Article entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a Article' }));
});

module.exports = router;
