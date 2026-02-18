# NotesMaking

A beautiful notes application with full CRUD functionality built with React and Node.js.

## Project Structure

```
NotesMaking/
├── backend/          # Node.js Express API
│   ├── src/
│   │   └── app.js     # Express app with routes
│   ├── server.js      # Server entry point
│   └── package.json
├── frontend/         # React TypeScript app
│   ├── src/
│   │   ├── App.tsx    # Main React component
│   │   └── index.css  # Tailwind CSS
│   └── package.json
└── README.md
```

## Getting Started

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend runs on port 3000

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on port 3001 (or next available port)

## Features

- ✅ Create notes
- ✅ Read all notes
- ✅ Update notes
- ✅ Delete notes
- 🎨 Beautiful UI with Tailwind CSS
- 📱 Responsive design
- ⚡ Real-time updates

## API Endpoints

- `POST /notes` - Add a new note
- `GET /notes` - Get all notes
- `DELETE /notes/:index` - Delete a note by index
- `PATCH /notes/:index` - Update a note by index
