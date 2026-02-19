const Note = require('../models/Note');

class NoteController {
    // Get all notes
    static getAllNotes(req, res) {
        try {
            const notes = Note.getAll();
            res.status(200).json({
                message: 'Notes fetched successfully',
                notes: notes
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error fetching notes',
                error: error.message
            });
        }
    }

    // Create a new note
    static createNote(req, res) {
        try {
            const note = Note.create(req.body);
            res.status(201).json({
                message: 'Note added successfully',
                data: note
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating note',
                error: error.message
            });
        }
    }

    // Update a note by index
    static updateNote(req, res) {
        try {
            const { index } = req.params;
            const updatedNote = Note.update(parseInt(index), req.body);
            
            if (!updatedNote) {
                return res.status(404).json({
                    message: 'Note not found'
                });
            }
            
            res.status(200).json({
                message: 'Note updated successfully',
                data: updatedNote
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error updating note',
                error: error.message
            });
        }
    }

    // Delete a note by index
    static deleteNote(req, res) {
        try {
            const { index } = req.params;
            const deletedNote = Note.delete(parseInt(index));
            
            if (!deletedNote) {
                return res.status(404).json({
                    message: 'Note not found'
                });
            }
            
            res.status(200).json({
                message: 'Note deleted successfully',
                data: deletedNote
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting note',
                error: error.message
            });
        }
    }
}

module.exports = NoteController;
