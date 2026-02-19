# Backend Documentation

## 📁 Available Documentation

- [**API Documentation**](./api.md) - Complete API reference with examples

## 🚀 Quick Start

1. Install dependencies: `npm install`
2. Start server: `npm run dev`
3. API runs on: `http://localhost:3000`

## 📡 API Overview

The Notes API provides simple CRUD operations:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/notes` | Get all notes |
| POST | `/notes` | Create new note |
| PUT | `/notes/:id` | Update note |
| DELETE | `/notes/:id` | Delete note |

## 🛠️ Tech Stack

- **Node.js** - Runtime
- **Express.js** - Web framework
- **In-memory storage** - Data persistence (for development)

## 📝 Notes

- Currently uses in-memory storage (data resets on server restart)
- No authentication required (development mode)
- CORS enabled for frontend integration
