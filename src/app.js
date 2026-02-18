const express = require('express');

const app = express();

app.use(express.json());

const notes = []
// POST /notes - Add a new note
app.post('/notes', (req, res) => {
    notes.push(req.body);

    res.status(201).json(
        {
            message: 'Note added successfully'
        }
    );
});

// GET /notes - Get all notes
app.get('/notes', (req, res) => {
    res.status(200).json(
        {
            message: 'Notes fetched successfully',
            notes: notes
        }
    );
});

// DELETE /notes/:index - Delete a note by index
app.delete('/notes/:index', (req, res) => {
    const index = req.params.index;
    // params is a object that contains all the parameters passed in the url
    // index is the parameter passed in the url
    // delete is a javascript operator that deletes a property from an object
    delete notes[index];
    res.status(200).json(
        {
            message: 'Note deleted successfully'
        }
    );
});

// PATCH /notes/:index - Update a note by index
app.patch('/notes/:index', (req, res) => {
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.status(200).json(
        {
            message: 'Note updated successfully'
        }
    );
});

module.exports = app;