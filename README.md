<<<<<<< HEAD
# LMS Client

A modern Learning Management System (LMS) frontend built with React and Vite. This client application provides separate dashboards for students and educators, enabling course management, enrollment, and interactive learning experiences.

## Features

### For Students
- Browse and search courses
- View course details and ratings
- Enroll in courses
- Access enrolled courses with video player
- Track progress and view testimonials

### For Educators
- Create and manage courses
- Add rich text content using Quill editor
- View enrolled students
- Dashboard for course analytics

### General Features
- User authentication via Clerk
- Responsive design with Tailwind CSS
- Progress tracking with visual indicators
- Star rating system for courses
- YouTube video integration for course content

## Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Authentication:** Clerk
- **Routing:** React Router DOM
- **Rich Text Editor:** Quill
- **Video Player:** React YouTube
- **Progress Bars:** RC Progress
- **Star Ratings:** React Simple Star Rating
- **Utilities:** Humanize Duration, Uniqid

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd LMS/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_CURRENCY=₹
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint for code linting
- `npm run preview` - Preview the production build locally

## Pages and Features

### Student Pages

#### Home Page (`/`)
- **Hero Section**: Promotional banner with call-to-action
- **Companies Section**: Display of trusted companies/partners
- **Course Section**: Featured courses with enrollment options
- **Testimonial Section**: Student reviews and ratings
- **Call to Action**: Encouragement to join or explore courses
- **Footer**: Contact information and links

#### Course Details Page (`/course/:id`)
- **Course Overview**: Title, description, and key information
- **Rating and Reviews**: Average rating and review count
- **Course Content**: Expandable sections showing lectures and duration
- **Instructor Information**: Details about the course creator
- **Enrollment Status**: Check if already enrolled
- **Video Preview**: YouTube video integration for course preview
- **Pricing**: Course cost in configured currency (₹)

#### Courses List Page (`/course-list`)
- **Search Functionality**: Filter courses by title
- **Course Grid**: Responsive grid layout of course cards
- **Breadcrumb Navigation**: Home > Course List
- **Search Bar**: Integrated search component
- **Course Cards**: Display course thumbnails, titles, ratings, and prices

#### My Enrollments Page (`/my-enrollments`)
- **Enrolled Courses**: List of courses the student has enrolled in
- **Progress Tracking**: Visual progress indicators for each course
- **Access to Course Content**: Direct links to course player

#### Course Player Page (`/course/:id/player`)
- **Video Player**: YouTube video integration for lecture playback
- **Lecture Navigation**: List of all lectures in the course
- **Progress Tracking**: Mark lectures as completed
- **Course Structure**: Organized by chapters/sections

### Educator Pages

#### Educator Dashboard (`/educator`)
- **Overview Statistics**: Total courses, enrolled students, earnings
- **Quick Actions**: Links to add courses, view enrollments
- **Recent Activity**: Latest course updates or student enrollments

#### Add Course Page (`/educator/add-course`)
- **Course Creation Form**: Title, description, pricing
- **Rich Text Editor**: Quill editor for detailed course descriptions
- **Chapter/Lecture Management**: Add and organize course content
- **Video Upload/Integration**: Add YouTube videos or upload content
- **Pricing Configuration**: Set course price and currency

#### My Courses Page (`/educator/my-courses`)
- **Course Management**: List all created courses
- **Edit Functionality**: Modify existing courses
- **Course Status**: Published/draft status
- **Analytics**: Views, enrollments per course

#### Students Enrolled Page (`/educator/students-enrolled`)
- **Enrollment List**: Students enrolled in educator's courses
- **Student Details**: Names, enrollment dates, progress
- **Course-wise Breakdown**: Students per course
- **Communication Tools**: Contact enrolled students

### Shared Components

#### Navigation
- **Student NavBar**: Links to home, courses, enrollments
- **Educator NavBar**: Dashboard, courses, students links
- **Responsive Design**: Mobile-friendly navigation

#### Authentication
- **Clerk Integration**: Sign up, sign in, user management
- **Role-based Access**: Separate flows for students and educators

#### UI Components
- **Loading Component**: Spinner for async operations
- **Rating Component**: Star rating display and input
- **Progress Bars**: Visual progress indicators
- **Search Bar**: Course search functionality

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
=======
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
>>>>>>> a805fdca18ea1eab970200443df1ce35a31866e8
