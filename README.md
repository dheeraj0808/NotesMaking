# NotesMaking

<<<<<<< Updated upstream
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
=======
A modern full-stack note-taking application built with React and Node.js following industry best practices.

## 🚀 Features

- Create, read, update, and delete notes
- Modern, responsive UI with Tailwind CSS
- RESTful API architecture
- Industry-standard folder structure
- Scalable and maintainable codebase

## 📁 Project Structure

```
NotesMaking/
├── frontend/                 # React frontend application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── components/       # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API service functions
│   │   ├── utils/           # Utility functions
│   │   └── styles/          # CSS and styling files
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── src/
│   │   ├── controllers/     # Route handlers and business logic
│   │   ├── models/          # Data models and schemas
│   │   ├── routes/          # API route definitions
│   │   ├── middleware/      # Custom middleware (auth, logging, etc.)
│   │   ├── services/        # Business logic and external integrations
│   │   ├── utils/           # Helper functions and utilities
│   │   ├── config/          # Configuration files
│   │   ├── validators/      # Input validation schemas
│   │   └── app.js           # Express app configuration
│   ├── tests/               # Test files
│   ├── docs/                # API documentation
│   ├── scripts/             # Build and deployment scripts
│   ├── logs/                # Application logs
>>>>>>> Stashed changes
│   └── package.json
└── README.md
```

<<<<<<< Updated upstream
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
=======
## 🛠️ Technology Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Lucide React** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dheeraj0808/NotesMaking.git
   cd NotesMaking
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:3000`

2. **Start the frontend application**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3001`

## 📡 API Endpoints

### Notes
- `GET /api/notes` - Get all notes
- `POST /api/notes` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## 🏗️ Architecture

This project follows industry best practices:

- **MVC Pattern**: Separation of concerns with Models, Views (Controllers), and Routes
- **RESTful API**: Standard HTTP methods and status codes
- **Modular Structure**: Organized code into logical modules
- **Scalability**: Easy to extend and maintain
- **Type Safety**: TypeScript for better code quality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙋‍♂️ Author

**Dheeraj**
- GitHub: [@dheeraj0808](https://github.com/dheeraj0808)
>>>>>>> Stashed changes
