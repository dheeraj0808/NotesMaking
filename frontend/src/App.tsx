import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Edit3, Save, X, StickyNote } from 'lucide-react';
import './App.css';

interface Note {
  description?: string;
  [key: string]: any;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await axios.get('http://localhost:3000/notes');
      setNotes(
        response.data.notes.filter(
          (note: any) => note !== null && note !== undefined
        )
      );
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const addNote = async () => {
    if (!newNote.trim()) return;
    try {
      await axios.post('http://localhost:3000/notes', {
        description: newNote,
      });
      setNewNote('');
      fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const deleteNote = async (index: number) => {
    try {
      await axios.delete(`http://localhost:3000/notes/${index}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const updateNote = async (index: number) => {
    try {
      await axios.patch(`http://localhost:3000/notes/${index}`, {
        description: editText,
      });
      setEditingIndex(null);
      setEditText('');
      fetchNotes();
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  const startEdit = (index: number, currentText: string) => {
    setEditingIndex(index);
    setEditText(currentText);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addNote();
  };

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <div className="header">
          <div className="header-icon">
            <StickyNote />
          </div>
          <h1>Notes</h1>
          <p>Create, read, update and delete your notes</p>
        </div>

        {/* Add Note */}
        <div className="add-note-card">
          <div className="add-note-form">
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Write something amazing..."
            />
            <button className="btn-add" onClick={addNote}>
              <Plus />
              Add Note
            </button>
          </div>
        </div>

        {/* Notes Count */}
        {notes.length > 0 && (
          <div className="notes-count">
            <span>Your Notes</span>
            <span className="count-badge">{notes.length}</span>
          </div>
        )}

        {/* Notes Grid */}
        {notes.length > 0 ? (
          <div className="notes-grid">
            {notes.map((note, index) => (
              <div className="note-card" key={index}>
                {editingIndex === index ? (
                  <>
                    <textarea
                      className="edit-textarea"
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      rows={3}
                      autoFocus
                    />
                    <div className="note-actions">
                      <button
                        className="btn-save"
                        onClick={() => updateNote(index)}
                      >
                        <Save />
                        Save
                      </button>
                      <button className="btn-cancel" onClick={cancelEdit}>
                        <X />
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="note-index">Note #{index + 1}</div>
                    <p className="note-text">
                      {note.description || 'Empty note'}
                    </p>
                    <div className="note-actions">
                      <button
                        className="btn-edit"
                        onClick={() =>
                          startEdit(index, note.description || '')
                        }
                      >
                        <Edit3 />
                        Edit
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => deleteNote(index)}
                      >
                        <Trash2 />
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-icon">
              <StickyNote />
            </div>
            <h3>No notes yet</h3>
            <p>Create your first note above!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
