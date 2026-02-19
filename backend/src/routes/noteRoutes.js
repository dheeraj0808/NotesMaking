const express = require('express');
const NoteController = require('../controllers/noteController');

const router = express.Router();

// GET /notes - Get all notes
router.get('/', NoteController.getAllNotes);

// POST /notes - Create a new note
router.post('/', NoteController.createNote);

// PATCH /notes/:index - Update a note by index
router.patch('/:index', NoteController.updateNote);

// DELETE /notes/:index - Delete a note by index
router.delete('/:index', NoteController.deleteNote);

module.exports = router;
