// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments
router.get('/', (req, res) => {
    Comment.find().then(comments => res.json(comments));
});

// Get comment by id
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id).then(comment => res.json(comment));
});

// Create new comment
router.post('/', (req, res) => {
    const newComment = new Comment({
        text: req.body.text,