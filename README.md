# 🍔 Food Delivery Web Application (MERN Stack)

A full-stack Food Delivery Web Application built using the MERN Stack (MongoDB, Express.js, React.js, and Node.js). The application allows customers to browse food items, manage their cart, place orders, and track order status. An admin dashboard is included for managing food items and customer orders.

---

## 📌 Table of Contents

- Introduction
- Features
- Tech Stack
- Project Structure
- Installation
- Running the Project
- Environment Variables
- Screenshots
- Future Improvements
- Author

---

# 📖 Introduction

This project is a complete Food Delivery platform developed using the MERN Stack.

It includes:

- Customer Website
- Admin Dashboard
- User Authentication
- Shopping Cart
- Food Management
- Order Management
- Image Upload
- Order Tracking

The application uses MongoDB for storing users, food items, carts, and orders while Express.js provides REST APIs consumed by the React frontend.

---

# ✨ Features

## Customer

- User Registration
- User Login (JWT Authentication)
- Browse Food Items
- Filter Food by Category
- Add Items to Cart
- Remove Items from Cart
- Update Quantity
- Place Orders
- Track Orders
- Responsive Design

## Admin

- Admin Dashboard
- Add Food Items
- Upload Food Images
- Delete Food Items
- View Customer Orders
- Update Order Status

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- React Context API
- Axios
- CSS

## Backend

- Node.js
- Express.js
- JWT Authentication
- Multer (Image Upload)

## Database

- MongoDB
- Mongoose

---

# 📂 Project Structure

```
Food-Delivery-App
│
├── admin
│   ├── src
│   └── package.json
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── uploads
│   └── server.js
│
├── frontend
│   ├── src
│   └── package.json
│
└── README.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone https://github.com/AshishSharma0704/Food-Delivery-App.git
cd Food-Delivery-App
```

---

# 📦 Backend Setup

Navigate to backend

```bash
cd backend
```

Install packages

```bash
npm install
```

Create a `.env` file

```env
PORT=4000

MONGODB_URI=mongodb://127.0.0.1:27017/reactjs-food-delivery-app

JWT_SECRET=your_secret_key
```

Start backend

```bash
npm run server
```

Backend runs on

```
http://localhost:4000
```

---

# 💻 Frontend Setup

Navigate to frontend

```bash
cd frontend
```

Install packages

```bash
npm install
```

Start frontend

```bash
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 👨‍💼 Admin Panel Setup

Navigate to admin

```bash
cd admin
```

Install packages

```bash
npm install
```

Start Admin

```bash
npm run dev
```

Admin Panel runs on

```
http://localhost:5174
```

---

# 🚀 Usage

### Customer

- Register/Login
- Browse food
- Add food to cart
- Place order
- View order history
- Track order status

### Admin

- Login to Admin Dashboard
- Add food items
- Upload food images
- Delete food items
- View customer orders
- Update order status

---

# 🗄 Database

MongoDB Collections

- users
- foods
- orders

---

# 🔐 Authentication

Authentication is implemented using

- JWT (JSON Web Token)

Protected APIs require a valid token.

---

# 🖼 Image Upload

Food images are uploaded using **Multer**.

Images are stored in

```
backend/uploads
```

and served from

```
http://localhost:4000/images/
```

---

# 📸 Screenshots

## Home

(Add your screenshot here)

---

## Login

(Add your screenshot here)

---

## Menu

(Add your screenshot here)

---

## Cart

(Add your screenshot here)

---

## Place Order

(Add your screenshot here)

---

## Admin Dashboard

(Add your screenshot here)

---

# 🔮 Future Improvements

- Online Payment Integration
- Email Notifications
- Search Food
- Food Reviews
- Wishlist
- Coupons & Discounts
- User Profile Management
- Admin Authentication
- Sales Analytics Dashboard

---

# 👨‍💻 Author

**Ashish Sharma**

GitHub

https://github.com/AshishSharma0704

Repository

https://github.com/AshishSharma0704/Food-Delivery-App

---

# 📄 License

This project is created for educational and learning purposes.

Feel free to fork, improve, and learn from it.