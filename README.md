# ⬡ MicroGoal — Backend API

Node.js + Express + MongoDB REST API

---

## 📁 Project Structure

```
microgoal/
├── Index.js
├── .env
├── package.json
├── Models/
│   ├── User.js
│   └── Goal.js
├── Controllers/
│   ├── AuthController.js
│   └── GoalController.js
├── Router/
│   ├── AuthRouter.js
│   └── GoalRouter.js
└── Middlewares/
    ├── authmiddleware.js
    └── errormiddleware.js
```

---

## 🚀 Run in VS Code

### Step 1 — Open project
```
code microgoal
```

### Step 2 — Open Terminal in VS Code
```
Ctrl + `
```

### Step 3 — Install dependencies
```bash
npm install
```

### Step 4 — Start server (development)
```bash
npm run dev
```

### Step 5 — Start server (production)
```bash
npm start
```

✅ Server runs on → http://localhost:8000

> Make sure MongoDB is running locally before starting.
> Start MongoDB: `mongod`

---

## 🔌 API Endpoints & Expected Output

### 1. Register User
```
POST http://localhost:8000/signup
Body (JSON):
{
  "name": "Dharam",
  "email": "dharam@gmail.com",
  "password": "123456"
}
```
**Response:**
```json
{
  "success": true,
  "message": "user is created",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "name": "Dharam",
    "email": "dharam@gmail.com",
    "password": "$2b$10$...",
    "_id": "...",
    "__v": 0
  }
}
```

---

### 2. Login
```
POST http://localhost:8000/login
Body (JSON):
{
  "email": "dharam@gmail.com",
  "password": "123456"
}
```
**Response:**
```json
{
  "success": true,
  "message": "login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": { ... }
}
```

---

### 3. Create Goal *(requires token)*
```
POST http://localhost:8000/goal/create
Headers: Authorization: Bearer <your_token>
Body (JSON):
{
  "title": "Complete Backend Project"
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "title": "Complete Backend Project",
    "completed": false,
    "user": "...",
    "_id": "...",
    "__v": 0
  }
}
```

---

### 4. Get All Goals *(requires token)*
```
GET http://localhost:8000/goal
Headers: Authorization: Bearer <your_token>
```

---

### 5. Update Goal *(requires token)*
```
PUT http://localhost:8000/goal/<goal_id>
Headers: Authorization: Bearer <your_token>
Body (JSON):
{
  "completed": "true"
}
```
**Response:**
```json
{
  "success": true,
  "message": "the goal is completed"
}
```

---

### 6. Delete Goal *(requires token)*
```
DELETE http://localhost:8000/goal/<goal_id>
Headers: Authorization: Bearer <your_token>
```
**Response:**
```json
{
  "message": "Goal deleted"
}
```

---

## ⚙️ Environment Variables (.env)

```env
PORT=8000
MONGO_URL=mongodb://127.0.0.1:27017/microgoalapp
JWT_SECRET=microgoal_secret_key_2024
```
