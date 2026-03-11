# 🛒 MERN Shop App

Full‑stack **eCommerce application** built with the **MERN stack**.  
The project includes both **frontend and backend**, providing a complete online store architecture with REST API and a client interface.

---

# 📸 Screenshots

## Main Page
![Main page](https://github.com/Progshokun/mern-shop-app/blob/main/Screenshot_1.jpg?raw=true)


---

# 🚀 Tech Stack

## Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

Frontend is responsible for:

- displaying product catalog
- managing cart state
- sending API requests to backend
- rendering UI components

---

## Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

Server handles:

- REST API
- business logic
- database operations

### Backend Dependencies

- **express** – web framework for Node.js
- **mongoose** – MongoDB object modeling
- **dotenv** – environment variable management
- **cors** – cross‑origin request handling

```json
"cors": "^2.8.6",
"dotenv": "^16.4.5",
"express": "^4.19.2",
"mongoose": "^8.5.1"
```

---

## Database
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

MongoDB is used to store:

- products
- users
- orders
- cart data

Data is managed using **Mongoose schemas and models**.

---

# ⚙️ Project Architecture

```
mern-shop-app
│
├── backend
│   ├── config
│   ├── controller
│   ├── models
│   ├── routes
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── pages
│   │   └── store
│   │   └── App.js
│
└── README.md
```

---

# 🔌 API Overview

Example endpoints:

```http
GET /api/products
GET /api/products/:id
POST /api/products
PUT /api/products/:id
DELETE /api/products/:id
```

The API is built using **REST principles** and communicates with MongoDB via Mongoose models.

---

# 🛠 Installation & Setup

### 1️⃣ Clone repository

```bash
git clone https://github.com/Progshokun/mern-shop-app.git
cd mern-shop-app
```

---

### 2️⃣ Install dependencies

Backend:

```bash
npm install
```

Frontend:

```bash
cd frontend
npm install
```

---

### 3️⃣ Setup environment variables

Create `.env` file in backend:

```
MONGO_URI=your_mongodb_connection
PORT=5000
```

---

### 4️⃣ Run project

Backend

```bash
npm run dev
```

Frontend

```bash
npm start
```

---

# ✨ Features

- 🛍 Product catalog
- 🛒 Shopping cart
- 📦 Product API
- 🔗 RESTful backend
- 🌐 MongoDB database
- ⚡ Full‑stack MERN architecture

---

# 📚 Learning Goals

This project demonstrates:

- building a **full‑stack MERN application**
- creating **REST APIs with Express**
- working with **MongoDB via Mongoose**
- connecting **React frontend to Node backend**
- managing environment configuration with **dotenv**

---

# 👨‍💻 Author

**GitHub:**  
https://github.com/Progshokun

---

⭐ If you like this project — consider giving it a **star**.

