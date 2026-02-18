import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2, Edit3, Save, X, StickyNote, Eye, FileText } from 'lucide-react';
import './App.css';

const API = 'http://localhost:3000';

interface Note {
  heading?: string;
  description?: string;
  [key: string]: any;
}

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editHeading, setEditHeading] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [showNotes, setShowNotes] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const showStatus = (msg: string) => {
    setStatusMsg(msg);
    setTimeout(() => setStatusMsg(''), 2500);
  };

  // GET - Fetch all notes
  const fetchNotes = async () => {
    try {
      const response = await axios.get(`${API}/notes`);
      setNotes(
        response.data.notes.filter(
          (note: any) => note !== null && note !== undefined
        )
      );
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  // POST - Add a new note
  const addNote = async () => {
    if (!heading.trim() && !description.trim()) return;
    try {
      await axios.post(`${API}/notes`, {
        heading: heading.trim(),
        description: description.trim(),
      });
      setHeading('');
      setDescription('');
      showStatus('✅ Note added successfully!');
      if (showNotes) fetchNotes();
    } catch (error) {
      console.error('Error adding note:', error);
      showStatus('❌ Failed to add note');
    }
  };

  // DELETE - Delete a note
  const deleteNote = async (index: number) => {
    try {
      await axios.delete(`${API}/notes/${index}`);
      showStatus('🗑️ Note deleted successfully!');
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
      showStatus('❌ Failed to delete note');
    }
  };

  // PATCH - Update a note (only description)
  const updateNote = async (index: number) => {
    try {
      await axios.patch(`${API}/notes/${index}`, {
        description: editDescription,
      });
      setEditingIndex(null);
      setEditHeading('');
      setEditDescription('');
      showStatus('✏️ Note updated successfully!');
      fetchNotes();
    } catch (error) {
      console.error('Error updating note:', error);
      showStatus('❌ Failed to update note');
    }
  };

  const startEdit = (index: number, note: Note) => {
    setEditingIndex(index);
    setEditHeading(note.heading || '');
    setEditDescription(note.description || '');
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditHeading('');
    setEditDescription('');
  };

  const handleViewAll = () => {
    if (!showNotes) {
      fetchNotes();
    }
    setShowNotes(!showNotes);
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

          {/* Method Badges */}
          <div className="method-badges">
            <span className="badge badge-post">POST</span>
            <span className="badge badge-get">GET</span>
            <span className="badge badge-patch">PATCH</span>
            <span className="badge badge-delete">DELETE</span>
          </div>
        </div>

        {/* Status Message */}
        {statusMsg && <div className="status-toast">{statusMsg}</div>}

        {/* POST - Add Note Section */}
        <div className="section-card">
          <div className="section-header">
            <span className="badge badge-post">POST</span>
            <h2>Create a Note</h2>
          </div>
          <div className="form-group">
            <input
              type="text"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              placeholder="Note heading..."
              className="input-field"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Note description..."
              className="textarea-field"
              rows={3}
            />
            <button className="btn-add" onClick={addNote}>
              <Plus />
              Add Note
            </button>
          </div>
        </div>

        {/* GET - View All Notes Button */}
        <div className="section-card">
          <div className="section-header">
            <span className="badge badge-get">GET</span>
            <h2>View All Notes</h2>
          </div>
          <button className="btn-view" onClick={handleViewAll}>
            <Eye />
            {showNotes ? 'Hide Notes' : 'View All Notes'}
          </button>
        </div>

        {/* Notes List */}
        {showNotes && (
          <>
            {notes.length > 0 && (
              <div className="notes-count">
                <span>Your Notes</span>
                <span className="count-badge">{notes.length}</span>
              </div>
            )}

            {notes.length > 0 ? (
              <div className="notes-grid">
                {notes.map((note, index) => (
                  <div className="note-card" key={index}>
                    {editingIndex === index ? (
                      /* PATCH - Edit Mode */
                      <>
                        <div className="edit-label">
                          <span className="badge badge-patch">PATCH</span>
                          <span>Editing Note #{index + 1}</span>
                        </div>
                        <h3 className="note-heading">{note.heading || 'Untitled'}</h3>
                        <textarea
                          className="textarea-field textarea-sm"
                          value={editDescription}
                          onChange={(e) => setEditDescription(e.target.value)}
                          placeholder="Description..."
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
                      /* View Mode */
                      <>
                        <div className="note-index">Note #{index + 1}</div>
                        <h3 className="note-heading">
                          {note.heading || 'Untitled'}
                        </h3>
                        <p className="note-text">
                          {note.description || 'No description'}
                        </p>
                        <div className="note-actions">
                          {/* PATCH button */}
                          <button
                            className="btn-edit"
                            onClick={() => startEdit(index, note)}
                          >
                            <Edit3 />
                            Edit
                          </button>
                          {/* DELETE button */}
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
                  <FileText />
                </div>
                <h3>No notes yet</h3>
                <p>Create your first note above!</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
