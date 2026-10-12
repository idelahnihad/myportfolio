# MyPortfolio — COMP229 Assignment 2

Portfolio application with a **Node.js + Express + MongoDB (Mongoose)** backend
and the **Assignment 1 React (Vite + TypeScript)** frontend.

**Owner:** Nihad Idelah — COMP229 Web Application Development

## Project structure

```
MyPortfolio/
├── server.js              # entry point: mongoose connection + express app
├── config/config.js       # port, JWT secret, mongoUri (EDIT YOUR CONNECTION STRING HERE)
├── server/
│   ├── express.js         # express app, middleware, route mounting
│   ├── models/            # contact / project / qualification / user (Mongoose schemas)
│   ├── controllers/       # CRUD logic for each resource + auth controller (JWT)
│   ├── routes/            # REST routes for /api/contacts, /api/projects,
│   │                      # /api/qualifications, /api/users + /auth/signin|signout
│   ├── helpers/           # dbErrorHandler
│   └── assets-router.js
└── client/                # Assignment 1 React frontend (Vite dev server on 5173)
```

## Setup

1. **Backend dependencies** (from the project root):

   ```bash
   npm install
   ```

2. **Frontend dependencies** (from the `client` folder):

   ```bash
   cd client
   npm install
   ```

3. **MongoDB connection** — open `config/config.js` and replace the `mongoUri`
   value with your own MongoDB Atlas connection string, e.g.:

   ```js
   mongoUri: process.env.MONGODB_URI ||
     "mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/Portfolio?retryWrites=true&w=majority" ||
     "mongodb://localhost:27017/Portfolio",
   ```

   The database `Portfolio` and its collections (`contacts`, `projects`,
   `qualifications`, `users`) are created automatically by Mongoose.

## Run the application

The frontend (port 5173) and the backend (port 3000) run together with one
command, from the **client** folder:

```bash
cd client
npm run dev
```

(`npm run dev` = `concurrently -k "npm:vite" "npm:server"`, i.e. Vite +
`nodemon ../server.js`.)

To run the backend alone: `node server.js` from the project root.

## REST API overview

| Method | URL | Action |
|---|---|---|
| GET | /api/contacts | get all contacts |
| GET | /api/contacts/:id | get contact by id |
| POST | /api/contacts | add new contact |
| PUT | /api/contacts/:id | update contact by id |
| DELETE | /api/contacts/:id | remove contact by id |
| DELETE | /api/contacts | remove all contacts |
| GET/POST | /api/projects | list / add projects |
| GET/PUT/DELETE | /api/projects/:id | read / update / remove project |
| DELETE | /api/projects | remove all projects |
| GET/POST | /api/qualifications | list / add qualifications |
| GET/PUT/DELETE | /api/qualifications/:id | read / update / remove qualification |
| DELETE | /api/qualifications | remove all qualifications |
| GET/POST | /api/users | list users / sign up |
| GET/PUT/DELETE | /api/users/:id | protected by JWT (requireSignin / hasAuthorization) |
| DELETE | /api/users | remove all users (protected) |
| POST | /auth/signin | sign in, returns JWT |
| GET | /auth/signout | sign out |

Protected routes expect the header `Authorization: Bearer <token>`.

## Authentication

JWT-based, per the Week 6 slides: `auth.controller.js` signs a token with
`jsonwebtoken` (`requireSignin` via `express-jwt` guards the user routes;
`hasAuthorization` lets users modify only their own profile).
