const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * TASK 11.1
 * Get all books using async/await with Axios
 */
router.get('/async/books', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/books');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving books' });
  }
});

/**
 * TASK 11.2
 * Get book by ISBN using Promises
 */
router.get('/promise/books/isbn/:isbn', (req, res) => {
  axios
    .get(`http://localhost:5000/books/isbn/${req.params.isbn}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(() => {
      res.status(404).json({ message: 'Book not found' });
    });
});

/**
 * TASK 11.3
 * Get books by Author using Promises
 */
router.get('/promise/books/author/:author', (req, res) => {
  axios
    .get(`http://localhost:5000/books/author/${req.params.author}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(() => {
      res.status(404).json({ message: 'Author not found' });
    });
});

/**
 * TASK 11.4
 * Get books by Title using Promises
 */
router.get('/promise/books/title/:title', (req, res) => {
  axios
    .get(`http://localhost:5000/books/title/${req.params.title}`)
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(() => {
      res.status(404).json({ message: 'Title not found' });
    });
});

module.exports.general = router;
