# 🚀 LMS Client (Frontend)

A scalable and modern **Learning Management System (LMS)** frontend built with **React + Vite**, designed to deliver a seamless learning experience for students and powerful course management tools for educators.

This project demonstrates **real-world frontend architecture**, including role-based dashboards, modular component design, authentication workflows, and production deployment using AWS EC2 + NGINX.

---

# 🧠 Project Overview

The LMS Client is a **feature-rich frontend application** that simulates a real-world e-learning platform like Udemy or Coursera.

It provides:

* 🎓 Students → Course discovery, enrollment, and learning experience
* 🧑‍🏫 Educators → Course creation, analytics, and student management

The system is designed with **scalability and maintainability in mind**, using modular architecture and reusable UI components.

---

# 🏗️ Architecture Overview

```text
User (Browser)
   ↓
React App (Vite Build)
   ↓
NGINX (EC2)
   ↓
Static Files (dist/)
```

### Key Principles:

* Frontend is **fully decoupled**
* Environment variables handled via **Vite (`import.meta.env`)**
* UI structured using **feature-based modular design**

---

# ✨ Core Features

## 🎓 Student Experience

### 📚 Course Discovery

* Browse all available courses
* Search courses by keyword
* Filter and explore course categories

### 📄 Course Details

* Course overview with description
* Instructor details
* Ratings and reviews system
* Pricing with currency support (₹)

### 🎥 Learning Experience

* Embedded video player (YouTube integration)
* Structured lecture navigation
* Chapter-wise content organization
* Progress tracking per lecture/course

### 📊 Enrollment System

* Enroll in courses
* View enrolled courses dashboard
* Track completion progress visually

---

## 🧑‍🏫 Educator Experience

### 📝 Course Creation

* Add course title, description, and pricing
* Rich text editing via Quill editor
* Add chapters and lectures dynamically
* Video integration (YouTube links)

### 📊 Dashboard Analytics

* Total courses created
* Number of enrolled students
* Revenue insights (UI-level)

### 📚 Course Management

* View and edit existing courses
* Publish/draft state handling
* Monitor engagement metrics

### 👥 Student Management

* View enrolled students per course
* Track student progress
* Course-wise enrollment insights

---

## 🌐 Shared Features

### 🔐 Authentication

* Integrated with **Clerk**
* Secure login/signup flow
* Role-based UI rendering (Student / Educator)

### 🎨 UI/UX

* Fully responsive (mobile-first design)
* Tailwind CSS for styling
* Clean and modern UI system

### ⭐ Interactive Components

* Star rating system
* Progress bars
* Search and filtering UI
* Loading states and async handling

---

# 🧰 Tech Stack

### ⚛️ Frontend

* React (Recommended: 18.x for stability)
* Vite (Fast build tool)

### 🎨 Styling

* Tailwind CSS

### 🔐 Authentication

* Clerk

### 📦 Libraries

* React Router DOM (Routing)
* Quill (Rich text editor)
* React YouTube (Video player)
* RC Progress (Progress indicators)
* React Simple Star Rating (Ratings)
* Humanize Duration (Time formatting)
* Uniqid (Unique IDs)

---

# ⚙️ Environment Variables

Create a `.env` file in the root:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_CURRENCY=₹
```

> ⚠️ Note: Vite only exposes variables prefixed with `VITE_`

---

# 🚀 Installation & Setup

```bash
git clone <repository-url>
cd LMS/client
npm install
npm run dev
```

Visit:

```
http://localhost:5173
```

---

# 🏭 Production Build

```bash
npm run build
```

This generates a `dist/` folder containing optimized static assets.

---

# 🌐 Deployment (AWS EC2 + NGINX)

### Steps:

```bash
npm run build
sudo cp -r dist/* /var/www/html/
sudo systemctl restart nginx
```

### NGINX Config (SPA Support):

```nginx
location / {
    try_files $uri /index.html;
}
```

---

# 📁 Project Structure

```
client/
├── components/
│   ├── student/
│   └── educator/
├── pages/
│   ├── student/
│   └── educator/
├── context/
├── assets/
├── App.jsx
├── main.jsx
```

### Design Approach:

* Feature-based grouping (student vs educator)
* Reusable UI components
* Centralized state via Context API

---

# 🔄 Data Flow (Frontend Perspective)

```text
User Action → Component → Context/API → UI Update
```

* State managed via Context API
* Future-ready for integration with backend APIs

---

# ⚠️ Current Limitations

* No backend integration (mock/static data)
* No persistent database
* Payments not implemented
* Role handling is UI-based (not secure yet)

---

# 🚀 Future Enhancements

* 🔗 Backend integration (FastAPI / Laravel)
* 💳 Payment gateway (Stripe / Razorpay)
* 📡 Real-time progress sync
* 🧠 Recommendation system
* 🔐 Secure role-based authorization (backend-driven)
* 📊 Advanced analytics dashboard

---

# 💼 Resume Value

This project demonstrates:

* Real-world frontend architecture
* Role-based application design
* Authentication integration
* Deployment using AWS EC2 + NGINX
* Scalable and modular UI development

---

# 📜 License

MIT License

---

# 👨‍💻 Author

Developed by **Koushik** 🚀
Aspiring Full Stack Developer | React | Laravel | FastAPI
