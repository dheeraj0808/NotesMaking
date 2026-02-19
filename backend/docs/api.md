# Notes API Documentation

Simple RESTful API for managing notes.

## Base URL
```
http://localhost:3000
```

## Endpoints

### Get All Notes
**GET** `/notes`

**Response:**
```json
{
  "success": true,
  "message": "Notes fetched successfully",
  "data": [
    {
      "id": "1645123456789",
      "title": "My First Note",
      "description": "This is a sample note",
      "createdAt": "2022-02-17T10:30:00.000Z",
      "updatedAt": "2022-02-17T10:30:00.000Z"
    }
  ]
}
```

### Create New Note
**POST** `/notes`

**Request Body:**
```json
{
  "title": "New Note Title",
  "description": "Note description here"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Note created successfully",
  "data": {
    "id": "1645123456789",
    "title": "New Note Title",
    "description": "Note description here",
    "createdAt": "2022-02-17T10:30:00.000Z",
    "updatedAt": "2022-02-17T10:30:00.000Z"
  }
}
```

### Update Note
**PUT** `/notes/:id`

**Request Body:**
```json
{
  "title": "Updated Title",
  "description": "Updated description"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Note updated successfully",
  "data": {
    "id": "1645123456789",
    "title": "Updated Title",
    "description": "Updated description",
    "createdAt": "2022-02-17T10:30:00.000Z",
    "updatedAt": "2022-02-17T11:00:00.000Z"
  }
}
```

### Delete Note
**DELETE** `/notes/:id`

**Response:**
```json
{
  "success": true,
  "message": "Note deleted successfully",
  "data": {
    "id": "1645123456789",
    "title": "Deleted Note",
    "description": "This note was deleted",
    "createdAt": "2022-02-17T10:30:00.000Z",
    "updatedAt": "2022-02-17T10:30:00.000Z"
  }
}
```

## Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Title and description are required"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Note not found"
}
```

### 500 Server Error
```json
{
  "success": false,
  "message": "Error message",
  "error": "Detailed error information"
}
```

## Usage Examples

### Using curl
```bash
# Get all notes
curl http://localhost:3000/notes

# Create a note
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","description":"Note content"}'

# Update a note
curl -X PUT http://localhost:3000/notes/1645123456789 \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","description":"Updated content"}'

# Delete a note
curl -X DELETE http://localhost:3000/notes/1645123456789
```

### Using JavaScript (fetch)
```javascript
// Get all notes
const response = await fetch('http://localhost:3000/notes');
const data = await response.json();

// Create a note
const createResponse = await fetch('http://localhost:3000/notes', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'New Note',
    description: 'Note content'
  })
});
```
